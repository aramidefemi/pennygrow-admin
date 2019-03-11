import React, { Component } from 'react';
import logo from './logo.svg';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';


import { Provider } from 'react-redux'
import configureStore from './store';
import Main from './router';




class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main /> 
      </Provider>
    );
  }
}

export default App;
