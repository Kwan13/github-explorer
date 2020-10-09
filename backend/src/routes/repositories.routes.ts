import { Router } from 'express';
import { getRepository } from 'typeorm';

// service
import CreateRepositoryService from '../services/CreateRepositoryService';

// model
import Repository from '../models/Repository';

const repositoriesRouter = Router();

repositoriesRouter.get('/:owner/:name', async (request, response) => {
  const profileRepository = getRepository(Repository);

  const { owner, name } = request.params;

  const repository = await profileRepository.findOne({
    where: {
      full_name: `${owner}/${name}`,
    },
  });

  return response.status(200).json(repository);
});

repositoriesRouter.get('/', async (request, response) => {
  const profileRepository = getRepository(Repository);

  const repositories = await profileRepository.find();

  return response.status(200).json(repositories);
});

repositoriesRouter.post('/', async (request, response) => {
  const { repo } = request.body;

  const createRepository = new CreateRepositoryService();
  const profileRepository = getRepository(Repository);

  await createRepository.execute({
    repo,
  });

  const repository = await profileRepository.findOne({
    where: {
      full_name: repo,
    },
  });

  return response.status(200).json(repository);
});

export default repositoriesRouter;
