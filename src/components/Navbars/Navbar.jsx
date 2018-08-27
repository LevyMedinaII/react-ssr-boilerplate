import React from 'react';
import { NavbarLogoutButton as Button } from '../Buttons/LogoutButton';
import './Navbar.css';

const Navbar = () => (
  <div className="is-navbar-container navbar-padded">
    <div className="is-brand">
      <b className="is-logo">Levy</b>
      <a href="#"
        className="nav-toggle is-push-right-mobile is-shown-mobile icon-kube-menu"
        data-kube="toggle"
        data-target="#navbar-responsive">
      </a>
    </div>
    <div id="navbar-responsive" className="is-navbar is-hidden-mobile">
      <nav className="is-stacked">
        <ul>
          <li className="is-active is-container">
            <a className="navbar-link is-push-right-mobile" href="/404">404!</a>
          </li>
        </ul>
      </nav>
      <nav className="is-stacked is-push-right">
        <ul>
          <li className="is-container"><Button>Sign Out</Button></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;