import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

// model
import Repository from '../models/Repository';

// service
import CreateOwnerService from './CreateOwnerService';

// error
import AppError from '../errors/AppError';

// api
import api from '../utils/api';

interface Request {
  repo: string;
}

interface ResponseGithubApi {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

class CreateRepositoryService {
  public async execute({ repo }: Request): Promise<Repository> {
    const profileRepository = getRepository(Repository);
    const createOwner = new CreateOwnerService();

    const repoExists = await profileRepository.findOne({
      where: {
        full_name: repo,
      },
    });

    if (repoExists) {
      throw new AppError('Este repositório já existe.');
    }

    const response = await api.get<ResponseGithubApi>(`repos/${repo}`);
    const {
      description,
      forks_count,
      full_name,
      open_issues_count,
      owner,
      stargazers_count,
    } = response.data;

    const registerOwner = await createOwner.execute({
      login: owner.login,
      avatar_url: owner.avatar_url,
    });

    const repository = profileRepository.create({
      id: uuid(),
      full_name,
      description,
      stargazers_count,
      forks_count,
      open_issues_count,
      owner_id: registerOwner.id,
    });

    await profileRepository.save(repository);

    return repository;
  }
}

export default CreateRepositoryService;
