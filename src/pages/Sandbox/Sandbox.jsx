import React, { Component } from 'react';
import { Navbar } from '../../components/Navbars';
import './Sandbox.css';

class Sandbox extends Component {
  render() {
    return (
      <div>
        <noscript>
          This is a sandbox page.
        </noscript>
        <Navbar />
      </div>
    );
  }
}

export default Sandbox;