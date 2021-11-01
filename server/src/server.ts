import express from 'express';
import cors from 'cors';
// import axios from 'axios';
import querystring from 'query-string';
import cookieParser from 'cookie-parser';
import SpotifyWebApi from 'spotify-web-api-node';


const app = express();
app.use(express.urlencoded({extended: true}));

// parse application/json
app.use(express.json());
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

const spotifyApi = new SpotifyWebApi({
  clientId: clientid,
  clientSecret: clientsecret,
  redirectUri: redirecturi,
});

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string*/
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

app.post('/login', async (req, res) => {
  // your application requests refresh and access tokens
  // after checking the state parameter
  try {
    console.log(req.body);
    const token = req.body.token;
    spotifyApi.setAccessToken(token);
    const response = await spotifyApi.getMe();
    console.log(response);
    // get spotify id
    // get spotify id

    res.status(200).send({token, userId: '123'});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Login falho'});
  }
},
);

app.listen(5000);
