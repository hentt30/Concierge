const {Router} = require('express');
import checkJwt from '../middlewares/checkJwt';
import PlaylistController from '../controllers/PlaylistController';

const router = Router();
// Login route
router.post('/create', [checkJwt], PlaylistController.createNewPlaylist);
router.get('/allplay', [checkJwt], PlaylistController.getAllPlaylists);
export default router;
