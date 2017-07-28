import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container">
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            CAH News Manager
          </NavLink>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item">
              News
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
