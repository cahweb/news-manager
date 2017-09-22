import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Login extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-4">
                <div className="box">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <p className="control">
                    <input className="input" type="text" ref="username" />
                  </p>
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <p className="control">
                    <input className="input" type="password" />
                  </p>
                  <hr />
                  <p className="control">
                    <button className="button is-primary">Login</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, actions)(Login);
