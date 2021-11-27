import React, {useState, useEffect} from 'react';
import {SpotifyAuth} from 'react-spotify-auth';
import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
const Login: React.FC = ()=>{
  const [token, setToken] =useState();
  const [error, setError] = useState(false);


  useEffect(()=> {
    if (token) {
      fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
        method: 'POST',
        body: JSON.stringify(
            {
              token: token,
            },
        ),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }).then(
          (response) => response.json(),
      ).then((json) =>{
        Cookies.set('apiToken', json.token);
        Cookies.set('token', token);
      }).catch((error) =>{
        console.log(error);
        setError(true);
      });
    }
  }, [token]);

  if (error) {
    Cookies.remove('token');
    Cookies.remove('apiToken');
    return (
      <div>
        <Redirect to='/'/>
      </div>
    );
  }
  return (
    <div>
      {token ? (
        <Redirect to='/dashboard' />
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri={process.env.REACT_APP_REDIRECT_URI}
          clientID={process.env.REACT_APP_CLIENT_ID}
          scopes={['user-read-private', 'user-read-email',
            'user-top-read', 'user-follow-read', 'playlist-modify-private',
            'playlist-read-collaborative', 'playlist-read-private',
            'playlist-modify-public']}
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </div>
  );
};


export default Login;