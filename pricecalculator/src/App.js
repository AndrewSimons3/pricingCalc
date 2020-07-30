import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Router from './Router'


class App extends React.Component {

  state = {
    loggedIn: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)
  }

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
    }
  }

export default App;
