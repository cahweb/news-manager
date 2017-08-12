import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container navbar-container">
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img role="presentation" src="/img/logo.gif" />
          </NavLink>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/new" className="navbar-item">
              <img role="presentation" src="/img/compose.png" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
