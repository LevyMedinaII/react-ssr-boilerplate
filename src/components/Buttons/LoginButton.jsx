import React, { Component } from 'react';

class FormLoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return(
      <button className="button" type="submit">
        { this.props.children }
      </button>
    )
  }
}

export {
  FormLoginButton
};