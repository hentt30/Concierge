import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {TextField} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {MenuItem} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {useTheme} from '@material-ui/core/styles';
import Cookies from 'js-cookie';
const genresD = [
  'acoustic',
  'afrobeat',
  'alt-rock',
  'alternative',
  'ambient',
  'anime',
  'black-metal',
  'bluegrass',
  'blues',
  'bossanova',
  'brazil',
  'breakbeat',
  'british',
  'cantopop',
  'chicago-house',
  'children',
  'chill',
  'classical',
  'club',
  'comedy',
  'country',
  'dance',
  'dancehall',
  'death-metal',
  'deep-house',
  'detroit-techno',
  'disco',
  'disney',
  'drum-and-bass',
  'dub',
  'dubstep',
  'edm',
  'electro',
  'electronic',
  'emo',
  'folk',
  'forro',
  'french',
  'funk',
  'garage',
  'german',
  'gospel',
  'goth',
  'grindcore',
  'groove',
  'grunge',
  'guitar',
  'happy',
  'hard-rock',
  'hardcore',
  'hardstyle',
  'heavy-metal',
  'hip-hop',
  'holidays',
  'honky-tonk',
  'house',
  'idm',
  'indian',
  'indie',
  'indie-pop',
  'industrial',
  'iranian',
  'j-dance',
  'j-idol',
  'j-pop',
  'j-rock',
  'jazz',
  'k-pop',
  'kids',
  'latin',
  'latino',
  'malay',
  'mandopop',
  'metal',
  'metal-misc',
  'metalcore',
  'minimal-techno',
  'movies',
  'mpb',
  'new-age',
  'new-release',
  'opera',
  'pagode',
  'party',
  'philippines-opm',
  'piano',
  'pop',
  'pop-film',
  'post-dubstep',
  'power-pop',
  'progressive-house',
  'psych-rock',
  'punk',
  'punk-rock',
  'r-n-b',
  'rainy-day',
  'reggae',
  'reggaeton',
  'road-trip',
  'rock',
  'rock-n-roll',
  'rockabilly',
  'romance',
  'sad',
  'salsa',
  'samba',
  'sertanejo',
  'show-tunes',
  'singer-songwriter',
  'ska',
  'sleep',
  'songwriter',
  'soul',
  'soundtracks',
  'spanish',
  'study',
  'summer',
  'swedish',
  'synth-pop',
  'tango',
  'techno',
  'trance',
  'trip-hop',
  'turkish',
  'work-out',
  'world-music',
];


const RDialog:React.FC = ()=> {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const [genres] = useState(genresD);
  const [genre, setGenre] = useState('');
  const [name, setName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeName = (event)=>{
    setName(event.target.value);
  };

  const handleClose = () => {
    if (genre === '' || name === '') {
      setOpen(false); return;
    }
    fetch(process.env.REACT_APP_BACKEND_URL + '/playlist/create', {
      method: 'POST',
      body: JSON.stringify(
          {
            spotifyToken: Cookies.get('token'),
            name: name,
            genre: genre,
          },
      ),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ Cookies.get('apiToken'),
      },
    }).then((response) =>{
      console.log(response);
      if (response.status !== 201) {
        throw new Error('Playlist não gerada');
      }
    }).catch((error) =>{
      console.log(error);
      Cookies.remove('token');
      Cookies.remove('apiToken');
      window.location.href ='/';
    });
    setOpen(false);
  };
  const handleChange = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<PlaylistAddIcon />}
        onClick = {handleClickOpen}
      >
            New Playlist
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Crie uma nova playlist'}
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              'display': 'flex',
              'flexDirection': 'column',
            }}
          >
            <TextField id="outlined-basic" label="Nome"
              onChange={handleChangeName}
              value = {name}
              variant="outlined" />
            <TextField
              id="outlined-select-currency"
              margin="normal"
              select
              label="Selecione o gênero"
              value={genre}
              onChange={handleChange}
            >
              {genres.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default RDialog;
