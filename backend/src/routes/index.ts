import express from 'express';

import repositoriesRouter from './repositories.routes';

const routes = express();

routes.use('/repositories', repositoriesRouter);

export default routes;
