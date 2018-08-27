import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { FullscreenLoader } from '../../components/Loaders';
import './LoginPage.css';

const AsyncLoginForm = Loadable({
  loader: () => import(/* webpackChunkName: "LoginPage" */ '../../components/Forms/LoginForm.jsx'),
  loading: () => <FullscreenLoader />,
  modules: ['LoginPage']
});

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="is-25 is-center">
          <h1> Ateneo Student Manual Registration System </h1>
          <br />
          <br />
          <AsyncLoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;