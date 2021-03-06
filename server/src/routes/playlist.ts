const {Router} = require('express');
import checkJwt from '../middlewares/checkJwt';
import PlaylistController from '../controllers/PlaylistController';

const router = Router();
// Login route
router.post('/create', [checkJwt], PlaylistController.createNewPlaylist);
router.post('/getAll', [checkJwt], PlaylistController.getAllPlaylists);
export default router;
