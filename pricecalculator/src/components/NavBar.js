import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { logOut } from '../checkAuth';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
    display: "flex"
  },
}));

export default function NavBar(props) {
  const isAuthenticated = props.loggedIn
  const loginButtonText = isAuthenticated ? "Logout" : "Login"
  const classes = useStyles();

  console.log(isAuthenticated)

  return (
    <div className={classes.root}>
      <AppBar position="static" style= {{background: '#4caf50'}}>
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <Link className='link' to='/'>Listings</Link>
          {isAuthenticated && (<Link className='link' to='/add'>Add</Link>)}
          <Link className='link' onClick={logOut} to='/login'>{loginButtonText}</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}