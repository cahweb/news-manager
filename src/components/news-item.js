import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import moment from 'moment';

class NewsItem extends Component {
  render() {
    return (
      <Link to={`/news/${this.props.item.slug}`}>
        <div className="card">
          <div className="card-image">
            <figure
              className="image is-4by3 featured-image"
              style={{
                backgroundImage: `url(${this.props.item.featured_media || '/img/empty.png'})`
              }}
            />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">
                  {renderHTML(this.props.item.title.rendered)}
                </p>
                <p className="subtitle is-6">
                  {this.props.item.site_name}
                </p>
              </div>
            </div>

            <div className="content">
              <small className="excerpt">
                {renderHTML(this.props.item.excerpt.rendered)}
              </small>
              <small
                className={`approval ${this.props.item.approved === 'yes'
                  ? 'approved'
                  : 'not-approved'}`}
              >
                {this.props.item.approved === 'yes' ? 'Approved' : 'Not Approved'}
              </small>
              <br />
              <small>
                {moment(this.props.item.date).format('h:mm a')} -{' '}
                {moment(this.props.item.date).format('D MMM YYYY')}
              </small>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewsItem;
