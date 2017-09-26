import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NewsList from './news-list';
import SpinnerList from './spinner-list';

import * as actions from '../actions';

class News extends Component {
  componentDidMount() {
    this.props.fetchSites().then(() => {
      this.props.fetchNews();
    });
  }

  render() {
    if (!this.props.auth.loggedIn) return <Redirect to="/login" />;

    if (this.props.news.length === 0) return <SpinnerList />;

    return (
      <div className="section">
        <div className="container">
          <NewsList news={this.props.news} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news, auth: state.auth };
}

export default connect(mapStateToProps, actions)(News);
