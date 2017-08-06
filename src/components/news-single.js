import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class NewsSingle extends Component {
  componentDidMount() {
    this.props.fetchSelectedNews(this.props.match.params.hostname, this.props.match.params.id);
  }

  render() {
    if (!this.props.selectedNews.id) {
      return <div>Loading...</div>;
    }

    return (
      <div className="section">
        <div className="container">
          <div className="card" style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
            <form>
              <div className="field">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    defaultValue={this.props.selectedNews.title.rendered}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="excerpt" className="label">
                  Excerpt
                </label>
                <div className="control">
                  <textarea className="textarea" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="content" className="label">
                  Content
                </label>
                <div className="control">
                  <textarea className="textarea" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label htmlFor="approved" className="radio">
                    <input type="radio" name="question" />
                    Yes
                  </label>
                  <label htmlFor="approved" className="radio">
                    <input type="radio" name="question" />
                    No
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedNews: state.selectedNews };
}

export default connect(mapStateToProps, actions)(NewsSingle);
