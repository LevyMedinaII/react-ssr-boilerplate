import React, { Component } from 'react';
import Loadable from 'react-loadable';
import LoginForm from '../../components/Forms/LoginForm';
import './Sandbox.css';

const AsyncLoginForm = Loadable({
  loader: () => import('../../components/Forms/LoginForm'),
  loading: () => <div>loading...</div>,
});

class Sandbox extends Component {
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

export default Sandbox;