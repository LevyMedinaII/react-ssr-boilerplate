import React, { Component } from 'react';
import { Sandbox } from './pages';
import { Switch, Route } from 'react-router-dom';

const FourOhFour = () => <h1> 404 </h1>;
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Sandbox} />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}

export default App;
