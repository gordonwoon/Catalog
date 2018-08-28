import React from 'react';

export default class ProductPage extends React.Component {
  render() {
    console.log(this.props.match.params.id);

    return (
      <div className="browse-page">
        Product Page
      </div>
    )
  }
}
