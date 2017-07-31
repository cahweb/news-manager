import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    for (const item of this.props.news) {
      if (item.slug === this.props.match.params.slug) {
        return this.setState({ item });
      }
    }
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          {this.props.match.params.slug}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news };
}

export default connect(mapStateToProps)(NewsSingle);
