import React from 'react';
import ToysContainer from './containers/ToysContainer'
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

// since I did export default I need fetchToys in curly brackets

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <ToysContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/toys"  />
          <Route path="/toys/new"  />
          <Route path="/signin" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    );
  }}


export default App;
// connect is calling store.dispatch({type: 'FETCH_TOYS', payload: {name: 'Biscotto Toy'}}) passed in an action, then goes to fetchToys.js and is expecting a return action object. It is expecting that because once that is returned from there it is then (by the connect) is dispatched to the store which is then sent into our toyReducer.js as action. 