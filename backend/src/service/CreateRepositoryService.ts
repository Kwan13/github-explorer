import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

// models
import Repository from '../models/Repository';
import Owner from '../models/Owner';

// error
import AppError from '../errors/AppError';

// api
import api from '../api';

interface Request {
  repository: string;
}

interface ResponseApi {
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

interface Response {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner_id: string;
}

class CreateRepositoryService {
  public async execute({ repository }: Request): Promise<Response> {
    const ownerRepository = getRepository(Owner);
    const rRepository = getRepository(Repository);

    const response = await api.get<ResponseApi>(`/repos/${repository}`);

    const {
      description,
      forks_count,
      full_name,
      open_issues_count,
      owner,
      stargazers_count,
    } = response.data;

    let repoOwner = await ownerRepository.findOne({
      where: {
        login: owner.login,
      },
    });

    if (!repoOwner) {
      repoOwner = ownerRepository.create({
        id: uuid(),
        login: owner.login,
        avatar_url: owner.avatar_url,
      });

      await ownerRepository.save(repoOwner);
    }

    const repoExists = await rRepository.findOne({
      where: {
        name: repository,
      },
    });

    if (repoExists) {
      throw new AppError('Este repositório já existe!');
    }

    const repo = rRepository.create({
      id: uuid(),
      name: full_name,
      description,
      forks_count,
      open_issues_count,
      stargazers_count,
      owner_id: repoOwner.id,
    });

    await rRepository.save(repo);

    return repo;
  }
}

export default CreateRepositoryService;
