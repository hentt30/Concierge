import React from 'react';
import {Spotify, ISpotify} from '../../services/spotify';

const Login: React.FC = ()=>{
  const spotifyApi:ISpotify = new Spotify();
  const loginUrl:string = spotifyApi.getUrl();
  console.log(loginUrl);
  return (
    <>
    </>
  );
};


export default Login;
