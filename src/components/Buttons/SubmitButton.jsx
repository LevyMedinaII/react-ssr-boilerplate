import React, { Component } from 'react';

class SubmitButton extends Component {
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

export default SubmitButton;