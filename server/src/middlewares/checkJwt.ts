import {Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import {User} from '../entity/user';
import {getRepository} from 'typeorm';

export const checkJwt = async (req, res: Response,
    next: NextFunction) => {
  // Get the jwt token from the head
  const token = <string>req.header('Authorization').replace('Bearer ', '');
  let jwtPayload;


  // Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, <string>process.env.JWTSECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    // If token is not valid, respond with 401 (unauthorized)
    console.log(error);
    res.status(401).send();
    return;
  }

  // The token is valid for 1 hour
  // We want to send a new token on every request
  try {
    const userRepository = getRepository(User);
    const {spotifyId} = jwtPayload;
    const user = await userRepository.findOneOrFail({where: {spotifyId}});

    req.user = user;
  } catch (error) {
    console.log(error);
    res.status(401).send();
    return;
  }
  // Call the next middleware or controller
  next();
};
