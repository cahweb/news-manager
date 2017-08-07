import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import renderHTML from 'react-render-html';

class NewsSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsSingle: {}
    };
  }

  componentDidMount() {
    const url = this.props.match.params.hostname;
    const id = this.props.match.params.id;

    axios.get(`http://${url}/wp-json/wp/v2/news/${id}`).then(res => {
      this.setState({ newsSingle: res.data });
    });
  }

  render() {
    if (!this.state.newsSingle.id) {
      return (
        <div className="section">
          <div className="container">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="section">
        <div className="container">
          <div className="card" style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
            <form onSubmit={this.onFormSubmit}>
              <div className="field">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    ref="title"
                    defaultValue={renderHTML(this.state.newsSingle.title.rendered)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="excerpt" className="label">
                  Excerpt
                </label>
                <div className="control">
                  <ReactQuill ref="excerpt" defaultValue={this.state.newsSingle.excerpt.rendered} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="content" className="label">
                  Content
                </label>
                <div className="control">
                  <ReactQuill ref="content" defaultValue={this.state.newsSingle.content.rendered} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label htmlFor="approved" className="checkbox">
                    Approved:{'  '}
                    <input
                      ref="approved"
                      type="checkbox"
                      defaultChecked={this.state.newsSingle.approved === 'yes' ? 'checked' : ''}
                    />
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <Link to="/" className="button is-link">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsSingle;
