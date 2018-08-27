import React from 'react';
import { NavbarLogoutButton as Button } from '../Buttons/LogoutButton';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-default is-navbar-container">
    <div className="is-brand">
      <b className="is-logo">ASMRS</b>
      <a href="#"
        className="nav-toggle is-push-right-mobile is-shown-mobile icon-kube-menu"
        data-kube="toggle"
        data-target="#navbar-responsive">
      </a>
    </div>
    <div id="navbar-responsive" className="is-navbar is-hidden-mobile">
      <nav>
        <ul>
          <li className="is-container">
            <a className="navbar-link is-push-right-mobile" href="#">Active</a>
          </li>
          <li className="is-container">
            <a className="navbar-link is-push-right-mobile" href="/404">404!</a>
          </li>
          <li className="is-container">
            <a className="navbar-link is-push-right-mobile" href="/details">ManReg Details</a>
          </li>
          <li className="is-container">
            <a className="navbar-link is-push-right-mobile" href="http://regcom.ateneo.edu">
              Regcom's Website
            </a>
          </li>
        </ul>
      </nav>
      <nav className="is-push-right">
        <ul>
          <li className="is-container"><Button>Sign Out</Button></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;