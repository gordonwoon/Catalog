import React from 'react';

import './Gallery.css';

export default class Gallery extends React.Component {
  renderItem(item) {
    const dataPath = '../assets/';
    return [
      <img src={`/assets/${item.image}`}/>,
      <h3>{item.name}</h3>,
      <button>Add To Cart</button>
    ];
  }
  renderGallery() {
    return this.props.list.map((item, key) => {
      return (
        <div className="gallery-item" key={key}>{this.renderItem(item)}</div>
      )
    })
  }
  render() {
    return (
      <div className="gallery-component">
        {this.renderGallery()}
      </div>
    )
  }
}
