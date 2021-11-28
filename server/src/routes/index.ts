import {Router} from 'express';
import auth from './auth';
import playlist from './playlist';
const routes = Router();

routes.use('/auth', auth);
routes.use('/playlist', playlist);

export default routes;
