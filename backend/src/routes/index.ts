import express from 'express';

// routes
import repositoriesRouter from './repositories.routes';

const routes = express();

routes.use('/repositories', repositoriesRouter);

export default routes;
