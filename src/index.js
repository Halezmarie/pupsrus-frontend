import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import toyReducer from './reducers/toyReducer'

//compose allows you to chain together different types of middlewares into one that I can just pass in one argument
//set up our store so that means I need to import create store from REDUX
//any component I wrap in provider will have access to the redux store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//enhancers equals these devtools or it equals compose


let store = createStore(toyReducer, composeEnhancers(applyMiddleware(thunk)))
//store is where I am storing my data globally.
//then I am sending an action object to my reducer and then the reducer takes in the action object and decides what will update the current store. It will return a new version of that store 




//Have to wrap the app and provider so that the store is global to all the other components/containers that I create 
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// frontend is grabbing the data with minimal manipulation of the data that is then showcased to the users.. render it all and display 😎