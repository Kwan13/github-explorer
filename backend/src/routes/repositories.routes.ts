import { Router } from 'express';
import CreateRepositoryService from '../service/CreateRepositoryService';

const repositoriesRouter = Router();

repositoriesRouter.post('/', async (request, response) => {
  const { repo } = request.boody;

  const createRepository = new CreateRepositoryService();

  const repository = await createRepository.execute({
    repository: repo,
  });

  return response.status(200).json(repository);
});

export default repositoriesRouter;
