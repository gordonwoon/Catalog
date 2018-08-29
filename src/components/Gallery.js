import React from 'react';
import { withRouter } from 'react-router-dom';

import './Gallery.css';

class Gallery extends React.Component {

  handleClick(element, event) {
    event.stopPropagation();
    this.props.handleClick(element);
  }
  renderItem(item, index) {
    const dataPath = '../assets/';
    return [
      <img src={`/assets/${item.image}`}/>,
      <div className="description">
        <span>{item.name}</span>
        <span>{item.measurement}</span>
      </div>,
      <span className="price">{item.price}</span>,
      <button onClick={this.handleClick.bind(this, index)}>{this.props.btnName}</button>
    ];
  }
  renderGallery() {
    return this.props.list.map((item, index) => {
      return (
        <div className="gallery-item" onClick={()=>this.props.history.push(`/browse/${index}`)} key={index}>{this.renderItem(item, index)}</div>
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

export default withRouter(Gallery);
