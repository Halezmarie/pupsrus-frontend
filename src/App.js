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
          <Route path="/signin" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    );
  }}

// ask why I do not need <Route path="/toys" /> // <Route path="/toys/new"  /> in my routes.

export default App;
