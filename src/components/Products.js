import React from 'react';

import { ProductsConsumer } from '../context/ProductsContext';

import './Products.css';

export default class Products extends React.Component {
  renderProducts() {
    return this.props.list.map((product, key) => {
      return (
        <div key={key}>{product.name}</div>
      )
    })
  }
  render() {
    return (
      <div className="products-component">
        {this.renderProducts()}
      </div>
    )
  }
}
