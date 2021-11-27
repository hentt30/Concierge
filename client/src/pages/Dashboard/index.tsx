import React, {useState, useEffect} from 'react';
import Dashbar from '../../components/Dashbar';
import Table from '../../components/Table';
import {columns} from './data';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RDialog from '../../components/RDialog';
import Cookies from 'js-cookie';
import {CircularProgress} from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Dashboard: React.FC = ()=>{
  const classes = useStyles();
  const [playlists, setplaylists] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/playlist/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ Cookies.get('apiToken'),
      },
    }).then(
        (response) => response.json(),
    ).then((json) =>{
      setplaylists(json.playlists);
    }).catch((error) =>{
      console.log(error);
      setLoaded(!loaded);
    });
  }, [loaded]);


  return (
    <div className={classes.root}>
      <Dashbar/>
      <CssBaseline />
      <Paper className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" component="h2" color="primary">
            Playlists
          </Typography>
          <RDialog/>
        </div>
        <div style={{height: 400, width: '100%'}}>
          <Table rowsData={playlists} columnsData={columns}/>
        </div>
      </Paper>
    </div>

  );
};


export default Dashboard;
