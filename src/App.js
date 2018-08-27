import React, { Component } from 'react';
import { Sandbox, LoginPage, FourOhFourPage } from './pages';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={Sandbox} />
        <Route component={FourOhFourPage} />
      </Switch>
    );
  }
}

export default App;
