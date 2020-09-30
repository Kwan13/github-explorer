import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateRepositoryService from '../service/CreateRepositoryService';

// models
import Repository from '../models/Repository';

const repositoriesRouter = Router();

repositoriesRouter.get('/', async (request, response) => {
  const profileRepository = getRepository(Repository);

  const repositories = await profileRepository.find();

  return response.status(200).json(repositories);
});

repositoriesRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createRepository = new CreateRepositoryService();

  const repository = await createRepository.execute({
    name,
  });

  return response.status(200).json(repository);
});

export default repositoriesRouter;
