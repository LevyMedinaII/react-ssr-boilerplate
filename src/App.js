import React, { Component } from 'react';
import { Dashboard, FourOhFourPage, LoginPage, Sandbox } from './pages';
import { FullscreenLoader } from './components/Loaders';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard"component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/loading" component={FullscreenLoader} />
        <Route component={FourOhFourPage} />
      </Switch>
    );
  }
}

export default App;
