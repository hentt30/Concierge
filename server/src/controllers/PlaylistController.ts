import {Response} from 'express';
// import * as jwt from 'jsonwebtoken';
// import {getRepository} from 'typeorm';
import SpotifyWebApi from 'spotify-web-api-node';
import {getRepository} from 'typeorm';
// import {User} from '../entity/user';
//
import {Playlist} from '../entity/paylist';

class PlaylistController {
  static createNewPlaylist = async (req, res: Response) => {
    try {
    // Check if username and password are set

      const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
      });

      const {spotifyToken, name, genre} = req.body;
      const playlistName = name;
      spotifyApi.setAccessToken(spotifyToken);
      // Create a private playlist

      const playlistData = await spotifyApi.createPlaylist(playlistName,
          {'description': 'Created by Concierge :)', 'public': true});


      const playlistLink = playlistData.body.external_urls.spotify;
      const playlistId = playlistData.body.id;

      const recommendations = await spotifyApi.getRecommendations({
        seed_genres: [genre],
      });

      const tracks = Array.from(recommendations.body.tracks, (e)=>{
        return <string>e.uri;
      });
      await spotifyApi.addTracksToPlaylist(playlistId,
          tracks);
      // Salvar a playlist
      const playlistRepository = getRepository(Playlist);
      const playlist = new Playlist();
      playlist.link = playlistLink;
      playlist.genre = genre;
      playlist.name = playlistName;
      playlist.userId = req.user.spotifyId;
      await playlistRepository.save(playlist);

      res.status(201).send();
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Falhou'});
    }
  };

  static getAllPlaylists = async (req, res:Response) => {
    try {
      const spotifyUserId = req.user.spotifyId;
      const playlistRepository = getRepository(Playlist);
      const playlists = await playlistRepository.find({
        where: {userId: spotifyUserId}});
      let id = 1;
      const arrayP = Array.from(playlists, (e)=>{
        const {genre, link, name} = e;
        const p = {genre, name,
          link, id}; id+= 1; return p;
      });
      res.status(200).send({playlists: arrayP});
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Falhou'});
    }
  };
}
export default PlaylistController;
