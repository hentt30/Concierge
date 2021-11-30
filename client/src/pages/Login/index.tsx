import React, {useState, useEffect} from 'react';
import SpotifyAuth from '../../components/SpotifyAuth';
import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
const Login: React.FC = ()=>{
  const [token, setToken] =useState('');


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
          (response) => {
            if (response.status !== 200 && response.status !== 304) {
              throw new Error('Login Falhou');
            }
            return response.json();
          },
      ).then((json) =>{
        Cookies.set('apiToken', json.token);
        Cookies.set('token', token);
        return Promise.resolve();
      }).catch((error) =>{
        console.log(error);
        console.log(error);
        Cookies.remove('token');
        Cookies.remove('apiToken');
        window.location.href ='/';

      });
    }
  }, [token]);


  return (
    <div>
      {token ? (
        <Redirect to='/dashboard' />
      ) : (
        // Display the login page
        <SpotifyAuth
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </div>
  );
};


export default Login;
