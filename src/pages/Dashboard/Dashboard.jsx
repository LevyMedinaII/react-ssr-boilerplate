import React, { Component } from 'react';
import { BaseLayout } from '../../components/Layouts';

class Dashboard extends Component {
  render() {
    return (
      <BaseLayout>
        <h1> ID Number: 132694 </h1>
        <h1> Name: Medina, Levy II </h1>
        <h1> Manual Registration Details: </h1>
      </BaseLayout>
    );
  }
}

export default Dashboard