import React, { Component } from 'react';
import { Dashboard, FourOhFourPage, LoginPage, Sandbox } from './pages';
import { FullscreenLoader } from './components/Loaders';
import { Switch, Route, Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/login">LoginPage</Link></li>
    <li><Link to="/sandbox">Sandbox</Link></li>
    <li><Link to="/loading">FullscreenLoader</Link></li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard"component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/loading" component={FullscreenLoader} />
        <Route exact path="/" component={Home} />
        <Route component={FourOhFourPage} />
      </Switch>
    );
  }
}

export default App;
