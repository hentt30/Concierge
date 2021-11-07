import React from 'react';
import Dashbar from '../../components/Dashbar';
import Table from '../../components/Table';
import {rows, columns} from './data';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RDialog from '../../components/RDialog';


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


  return (
    <div className={classes.root}>
      <Dashbar/>
      <CssBaseline />
      <Paper className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" component="h2" color="primary">
            Playlists
          </Typography>
          <RDialog />
        </div>
        <div style={{height: 400, width: '100%'}}>
          <Table rowsData={rows} columnsData={columns}/>
        </div>
      </Paper>
    </div>

  );
};


export default Dashboard;
