import React, { Component } from 'react';
import { FormLoginButton as Button } from '../Buttons';

class LoginForm extends Component {
  render() {
    return (
      <form method="post" action="/">
        <div className="form-item">
            <label>Email:</label>
            <input type="email" name="email" className="w50"/>
        </div>
        <div className="form-item">
            <label>Password:</label>
            <input type="password" name="password" className="w50"/>
        </div>
        <br />
        <div className="is-container">
          <Button> Log In </Button>
          <button
            className="button is-push-right is-tertiary"
            onClick={(e) => e.preventDefault()}
          >
            Forgot your password?
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;