import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

const FullscreenLoader = () => (
  <div className="loader-page">
    <Loader type="Grid" color="#2c76ee" height="3em" width="3em" />
  </div>
);

export default FullscreenLoader;