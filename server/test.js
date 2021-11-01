const axios = require('axios');
const clientid = '62e49dbf7c7d4e638dcbed1b69e5794f';
const clientsecret = '3860e2a093ef4706bfd87e301a371cbe';
const t = 'BQBgQ1feagP-49NyPh9ZLhl8GcwmNGvX0pJBHxkuhn3M7YoUAL5uTbX0794EaAD8P26lwY-semuE3e6ygsCXhQjCvzusnOZzQFLlMc3aJ6hkVpQFrcaGCKwEVxfO4YGniKPnI4DcAV2uvEAIJ83AVsRLhXHziswHXLOISnnoMCSXm_DoP4lqmGI';


axios.get('https://api.spotify.com/v1/me', {

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer '+ t,
  },
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
