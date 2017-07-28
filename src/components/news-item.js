import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';

class NewsItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" role="presentation" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.props.item.title.rendered}
              </p>
              <p className="subtitle is-6">
                {this.props.item.site_name}
              </p>
            </div>
          </div>

          <div className="content">
            {renderHTML(this.props.item.excerpt.rendered)}
            <small>
              Approved: {this.props.item.approved}
            </small>
            <br />
            <small>
              {moment(this.props.item.date).format('h:mm a')} -{' '}
              {moment(this.props.item.date).format('D MMM YYYY')}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
