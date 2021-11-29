import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {getRepository} from 'typeorm';
import SpotifyWebApi from 'spotify-web-api-node';
import {User} from '../entity/user';

class AuthController {
  static login = async (req: Request, res: Response) => {
    try {
    // Check if username and password are set
      const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
      });

      const spotifyToken = req.body.token;
      spotifyApi.setAccessToken(spotifyToken);
      let spotifyResponse;
      try {
        spotifyResponse = await spotifyApi.getMe();
      } catch (error) {
        res.status(403).send({message: 'Spotify falhou'});
      }
      const spotifyId = spotifyResponse.body.id;

      // Pegar o usuário da base de dados
      const userRepository = getRepository(User);
      let user: User;
      try {
        user = await userRepository.findOne({where: {spotifyId}});
      } catch (error) {
        res.status(401).send();
      }

      // Criar usuário se não existir
      if (!user) {
        user = new User();
        user.spotifyId = spotifyId;
        await userRepository.save(user);
      }


      // Sing JWT, valid for 1 hour
      const token = jwt.sign(
          {spotifyId: user.spotifyId},
         <string>process.env.JWTSECRET,
         {expiresIn: '1h'},
      );

      // Send the jwt in the response
      res.status(200).send({token});
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Falhou'});
    }
  };
}
export default AuthController;
