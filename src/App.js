import React from 'react';
import ToysContainer from './containers/ToysContainer'
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <ToysContainer />
        <Switch>
          <Route path="/" exact component={Home}  /> 
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </div>
    );
  }}

export default App;
