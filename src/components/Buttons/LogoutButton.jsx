import React, { Component } from 'react';

class NavbarLogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return(
      <button className="button is-small is-secondary is-push-right-mobile">
        { this.props.children }
      </button>
    )
  }
}

export {
  NavbarLogoutButton
};