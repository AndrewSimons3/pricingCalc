import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/MenuIcon';
import { Link } from 'react-router-dom';
import { logOut } from '../checkAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    padding: '6px 8px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: '600',
  }
}));

export default function ButtonAppBar(props) {
  const isAuthenticated = props.loggedIn
  const loginButtonText = isAuthenticated ? "LOGOUT" : "LOGIN"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            360 Home Connect
          </Typography>
          <Link className={classes.link} onClick={logOut} to='/login'>{loginButtonText}</Link>
          <Link className={classes.link} to='/'>PRICING CALCULATOR</Link>
          <Link className={classes.link} to='/electric'>ELECTRIC</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// import { logOut } from '../checkAuth';

// export default function NavBar(props) {
//   const isAuthenticated = props.loggedIn
//   const loginButtonText = isAuthenticated ? "Logout" : "Login"
//   const classes = useStyles();

//   console.log(isAuthenticated)

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" style= {{background: '#4caf50'}}>
//         <Toolbar>
//           <Typography edge="start" variant="h6" className={classes.title}>
//             Austin Small Business
//           </Typography>
//           <Link className='link' to='/'>Listings</Link>
//           {isAuthenticated && (<Link className='link' to='/add'>Add</Link>)}
          // <Link className='link' onClick={logOut} to='/login'>{loginButtonText}</Link>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }