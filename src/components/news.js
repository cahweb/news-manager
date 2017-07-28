import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsList from './news-list';

import * as actions from '../actions';

class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <NewsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news };
}

export default connect(mapStateToProps, actions)(News);
