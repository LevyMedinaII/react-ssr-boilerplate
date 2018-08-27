import React, { Component } from 'react';
import LoginForm from '../../components/Forms/LoginForm.jsx';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="is-25 is-center">
          <h1> Ateneo Student Manual Registration System </h1>
          <br />
          <br />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;