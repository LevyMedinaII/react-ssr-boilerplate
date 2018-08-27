import React, { Component } from 'react';
import { BaseLayout } from '../../components/Layouts';
import './Sandbox.css';

class Sandbox extends Component {
  render() {
    return (
      <div>
        <noscript>
          This is a sandbox page.
        </noscript>
        <BaseLayout>
          Bro
        </BaseLayout>
      </div>
    );
  }
}

export default Sandbox;