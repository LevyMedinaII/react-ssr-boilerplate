import React, { Component } from 'react';
import Form from '../../components/Forms/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="is-25 is-center">
          <h1> Ateneo Student Manual Registration System </h1>
          <br />
          <br />
          <Form />
        </div>
      </div>
    );
  }
}

export default LoginPage;