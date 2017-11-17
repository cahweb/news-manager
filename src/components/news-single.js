import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';

import * as actions from '../actions';

class NewsSingle extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.state = {
      newsSingle: {},
      loading: false,
    };
  }

  componentDidMount() {
    const url = this.props.match.params.hostname;
    const id = this.props.match.params.id;

    axios.get(`http://${url}/wp-json/wp/v2/news/${id}`).then(res => {
      this.setState({ newsSingle: res.data });
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const url = this.props.match.params.hostname;
    const id = this.props.match.params.id;
    const { title, excerpt, author, content } = this.refs;

    this.setState({ loading: true });

    this.props.clearNews();

    axios
      .patch(
        `http://${url}/wp-json/wp/v2/news/${id}`,
        {
          title: title.value,
          author: author.value,
          excerpt: excerpt.getEditorContents(),
          content: content.getEditorContents(),
          approved: this.state.newsSingle.approved === 'yes' ? 'on' : 'off',
        },
        {
          headers: {
            Authorization: `Basic ${this.props.token}`,
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          this.props.notify({
            type: 'success',
            text: 'Submitted!',
          });
          this.setState({ loading: false });
        }
      })
      .catch(() => {
        this.props.notify({
          type: 'error',
          text: 'Unable to submit form: invalid login',
        });
        this.setState({ loading: false });
      });
  }

  toggleCheckbox() {
    this.setState({
      newsSingle: {
        ...this.state.newsSingle,
        approved: this.state.newsSingle.approved === 'yes' ? 'no' : 'yes',
      },
    });
  }

  render() {
    if (!this.props.loggedIn) return <Redirect to="/login" />;

    if (!this.state.newsSingle.id) {
      return (
        <div className="section">
          <div className="container">
            <div className="card spinner-card">
              <div className="spinner" />
            </div>
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
                <label htmlFor="author" className="label">
                  Author
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    ref="author"
                    defaultValue={renderHTML(this.state.newsSingle.author)}
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
                  <ReactQuill
                    ref="content"
                    className="content"
                    defaultValue={this.state.newsSingle.content.rendered}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label htmlFor="approved" className="checkbox">
                    Approved:{'  '}
                    <input
                      ref="approved"
                      type="checkbox"
                      onChange={this.toggleCheckbox}
                      checked={this.state.newsSingle.approved === 'yes'}
                    />
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button
                    className={`button is-info ${this.state.loading ? 'is-loading' : ''}`}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="control">
                  <Link to="/" className="button is-link">
                    Close
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

function mapStateToProps(state) {
  return { token: state.auth.token, loggedIn: state.auth.loggedIn };
}

export default connect(mapStateToProps, actions)(NewsSingle);
