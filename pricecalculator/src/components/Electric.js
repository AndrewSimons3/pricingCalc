import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '5%',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    height: '75px',
    margin: '1%'
  },
  pageTitle: {
    margin: 'auto',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    fontWeight: 'bold'
  },
  oncorHeader: {
    fontWeight: 'bold',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageTitle}>ELECTRIC RATES</div>
      <br></br>
      <Grid className={classes.oncorHeader}>
        <Grid item xs>
          <Paper className={classes.paper}>Oncor</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>12 Months</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>24 Months</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>36 Months</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Tri-Eagle</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.9 2000kwph<br></br>11.2 1000kwph<br></br>11.7 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.3 2000kwph<br></br>10.6 1000kwph<br></br>11.1 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.3 2000kwph<br></br>10.6 1000kwph<br></br>11.1 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Discount Power</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.1 2000kwph<br></br>10.3 1000kwph<br></br>10.6 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>9.7 2000kwph<br></br>9.8 1000kwph<br></br>10.2 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>9.5 2000kwph<br></br>9.7 1000kwph<br></br>10 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Infinite Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>9.7 2000kwph<br></br>9.9 1000kwph<br></br>12.2 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>9.5 2000kwph<br></br>9.7 1000kwph<br></br>11.9 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>9.4 2000kwph<br></br>9.6 1000kwph<br></br>11.8 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Chariot Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.9 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>4Change Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Grid className={classes.oncorHeader}>
        <Grid item xs>
          <Paper className={classes.paper}>Centerpoint</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>12 Months</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>24 Months</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>36 Months</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Tri-Eagle</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5fdsafdsafdsfd 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Discount Power</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Infinite Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>Chariot Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>12 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>4Change Energy</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>12 2000kwph<br></br>10.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>10.5 2000kwph<br></br>12.8 1000kwph<br></br>11.3 500kwph</Paper>
        </Grid>
      </Grid>
    </div>
  );
}