import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

//set up our store so that means I need to import create store from REDUX
//any component I wrap in provider will have access to the redux store
let store = createStore(reducer, applyMiddleware(thunk))




// Have to wrap the app and provider so that the store is global to all the other components/containers that I create 
ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// frontend is grabbing the data with minimal manipulation of the data that is then showcased to the users.. render it all and display 😎