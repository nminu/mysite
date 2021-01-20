import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from '../Projects/projects';
import About from '../About/about';
import Home from '../Home/home';


function App() {

  return (
    <Main />
  );
  
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/projects' component={Projects}></Route>
  </Switch>
);


export default App;
