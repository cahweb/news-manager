import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsList from './news-list';

import * as actions from '../actions';

class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    if (this.props.news.length === 0) {
      return (
        <div className="section">
          <div className="container">
            <h1>Fetching News...</h1>
          </div>
        </div>
      );
    }

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
  return { news: state.news };
}

export default connect(mapStateToProps, actions)(News);
