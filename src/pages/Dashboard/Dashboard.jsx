import React, { Component } from 'react';
import { BaseLayout } from '../../components/Layouts';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <BaseLayout>
        <div className="dashboard-home">
          <div className="is-50">
            <h1> ID Number: 132694 </h1>
            <h1> Name: Medina, Levy II </h1>
            <h1> Student Information: </h1>
          </div>
          <div className="is-50">
            <h1> Manual Reg Details: </h1>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

export default Dashboard