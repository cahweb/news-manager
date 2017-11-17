import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import moment from 'moment';

class NewsItem extends Component {
  extractHostname(url) {
    let hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }

  renderApproved(approval) {
    switch (approval) {
      case 3:
        return 'CAH Front Page';

      case 2:
        return 'CAH Newsroom and Child Pages';

      default:
        return 'Child Pages';
    }
  }

  render() {
    return (
      <Link to={`/news/${this.extractHostname(this.props.item.link)}/${this.props.item.id}`}>
        <div className="card">
          <div className="card-image">
            <figure
              className="image is-4by3 featured-image"
              style={{
                backgroundImage: `url(${this.props.item.featured_media || '/img/empty.png'})`,
              }}
            />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">{renderHTML(this.props.item.title.rendered)}</p>
                <p className="subtitle is-6">{this.props.item.site_name}</p>
              </div>
            </div>

            <div className="content">
              <small className="excerpt">{renderHTML(this.props.item.excerpt.rendered)}</small>
              <small className="approval approved">
                {this.renderApproved(this.props.item.approved)}
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
