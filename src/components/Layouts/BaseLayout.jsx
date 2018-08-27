import React from 'react';
import { Navbar } from '../Navbars';
import './Layout.css';

const BaseLayout = (props) => (
  <div>
    <Navbar />
    <div className="layout-base-content">
      <div className="layout-base-container"> { props.children } </div>
    </div>
  </div>
);

export default BaseLayout;