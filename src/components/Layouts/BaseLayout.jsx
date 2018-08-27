import React from 'react';
import { Navbar } from '../Navbars';
import './Layout.css';

const BaseLayout = (props) => (
  <div>
    <Navbar />
    <div className="layout-base-content">
      { props.children }
    </div>
  </div>
);

export default BaseLayout;