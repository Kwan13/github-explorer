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
  name: string;
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
  public async execute({ name }: Request): Promise<Response> {
    const ownerRepository = getRepository(Owner);
    const profileRepository = getRepository(Repository);

    // Procurando por repositório já existente
    const repoExists = await profileRepository.findOne({
      where: {
        name,
      },
    });

    if (repoExists) {
      throw new AppError('Este repositório já existe!');
    }

    const repository = await api.get<ResponseApi>(`/repos/${name}`);

    // Procurando por dono já existente
    let repoOwner = await ownerRepository.findOne({
      where: {
        login: repository.data.owner.login,
      },
    });

    // Persistindo dono caso não exista
    if (!repoOwner) {
      repoOwner = ownerRepository.create({
        id: uuid(),
        login: repository.data.owner.login,
        avatar_url: repository.data.owner.avatar_url,
      });

      await ownerRepository.save(repoOwner);
    }

    // Persistindo repositório caso não exista
    const repo = profileRepository.create({
      id: uuid(),
      name: repository.data.full_name,
      description: repository.data.description,
      forks_count: repository.data.forks_count,
      open_issues_count: repository.data.open_issues_count,
      stargazers_count: repository.data.stargazers_count,
      owner_id: repoOwner.id,
    });

    await profileRepository.save(repo);

    return repo;
  }
}

export default CreateRepositoryService;
