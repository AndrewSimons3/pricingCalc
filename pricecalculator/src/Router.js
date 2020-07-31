import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PricingCalculator from './containers/PricingCalculator'
import Login from './components/Login'
import { checkAuth } from './checkAuth'
import NavBar from './components/NavBar'
import ButtonAppBar from './components/NavBar'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const comp = Component
  return (
      <Route
      {...rest}
      render={(props) => checkAuth(comp) === true
          ? (<div><ButtonAppBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>)
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
  )
}

const UnProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => 
         <div><NavBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>
      }
      />
  )
}

const Router = () => {
  return (
      <Switch>
          <Route path="/login" component={Login} />
          <UnProtectedRoute exact path="/" component={PricingCalculator} />
      </Switch>
  );
};

export default Router;