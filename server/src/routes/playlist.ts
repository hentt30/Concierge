import {Router} from 'express';
import {checkJwt} from 'src/middlewares/checkJwt';
import PlaylistController from '../controllers/PlaylistController';

const router = Router();
// Login route
router.post('/create', [checkJwt], PlaylistController.createNewPlaylist);
router.get('/getAll', [checkJwt], PlaylistController.getAllPlaylists);
export default router;
