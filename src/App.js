import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

class App extends Component {
  render() {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" exact component={AboutPage}/>
      </div>
    );
  }
}

export default App;
