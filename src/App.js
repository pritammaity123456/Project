import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClaimModule from './modules/claim/ClaimModule';
import PaymentModule from './modules/payment/PaymentModule';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/claim" exact component={ClaimModule}/>
        <Route path="/payment" exact component={PaymentModule}/>
      </div>
    );
  }
}

export default App;
