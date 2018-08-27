import React from 'react';
import Loadable from 'react-loadable';
import { FullscreenLoader } from '../components/Loaders';

import FourOhFourPage from './FourOhFourPage/FourOhFourPage.jsx';

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "Dashboard" */ './Dashboard/Dashboard.jsx'),
  loading: () => <FullscreenLoader />,
  modules: ['Dashboard']
});

const LoginPage = Loadable({
  loader: () => import(/* webpackChunkName: "LoginPage" */ './LoginPage/LoginPage.jsx'),
  loading: () => <FullscreenLoader />,
  modules: ['LoginPage']
});

const Sandbox = Loadable({
  loader: () => import(/* webpackChunkName: "Sandbox" */ './Sandbox/Sandbox.jsx'),
  loading: () => <FullscreenLoader />,
  modules: ['Sandbox']
});

export {
  Dashboard,
  FourOhFourPage,
  LoginPage,
  Sandbox,
}