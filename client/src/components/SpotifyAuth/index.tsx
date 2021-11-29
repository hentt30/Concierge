/* eslint-disable camelcase */
import React, {useEffect} from 'react';

type SpotifyAuthProps={
  onAccessToken(token:string):void;
}
type HashProps = {
    access_token?:string;
}
const getHash = ():HashProps => {
  return window ?
    window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
          if (item) {
            const parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, {}) :
    '';
};

const SpotifyAuth : React.FC<SpotifyAuthProps> = ({onAccessToken})=>{
  useEffect(()=>{
    const accessToken = getHash().access_token;
    if (accessToken !== '') {
      onAccessToken(accessToken);
    }
  });
  return (
    <>
    </>
  );
};


export default SpotifyAuth;
