import express from 'express';
import cors from 'cors';
import axios from 'axios';
import querystring from 'query-string';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors(
    {
      origin: ['http://localhost:3000', 'https://accounts.spotify.com'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 200,
      credentials: true,
    },
)).use(cookieParser());
const clientid = process.env.CLIENT_ID;
const clientsecret = process.env.CLIENT_SECRET;
const redirecturi = process.env.REDIRECT_URI;


/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function(length: number) {
  let text = '';
  const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

app.get('/signin', (request, response,
)=>{
  console.log('trying sign in');
  const state = generateRandomString(16);
  response.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';
  response.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: clientid,
        scope: scope,
        redirect_uri: redirecturi,
        state: state,
      }));
});

app.get('/logged', function(req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch',
        }));
  } else {
    res.clearCookie(stateKey);

    const postData = querystring.stringify({
      grant_type: 'authorization_code',
      redirect_uri: redirecturi,
      code: code,
    });

    const postOptions = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':
                'Basic ' +
                Buffer.from(clientid + ':' + clientsecret).toString('base64'),
      },
    };

    axios.post('https://accounts.spotify.com/api/token', postData, postOptions)
        .then((response) => {
          if (response.status === 200) {
            // @ts-ignore
            const accessToken = response.data.access_token;
            // const refreshToken = response.data.refresh_token;
            console.log(accessToken);
            axios.get('https://api.spotify.com/v1/me', {
              headers: {'Authorization': 'Bearer ' + accessToken},
            }).then((response) => {
              res.json(response.data);
            });
          }
        }, (error) => {
          console.log('error ):');
          // console.log(error);
        });
  }
});

app.listen(5000);
