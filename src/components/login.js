import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.loginUser(username, password);
  }

  render() {
    if (this.props.loggedIn) return <Redirect to="/" />;

    return (
      <section className="hero is-fullheight is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-4">
                <div className="box">
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="field">
                      <label htmlFor="username" className="label">
                        Username
                      </label>
                      <div className="control">
                        <input className="input" type="text" ref="username" />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="password" className="label">
                        Password
                      </label>
                      <div className="control">
                        <input className="input" type="password" ref="password" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary">Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.auth.loggedIn };
}

export default connect(mapStateToProps, actions)(Login);
