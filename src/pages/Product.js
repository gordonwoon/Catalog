import React from 'react';

import './Product.css';

import { ProductsConsumer } from '../context/ProductsContext';

class ProductPage extends React.Component {
  renderProduct(product) {
    let { addToCart } = this.props.products;

    return (
      <div className="product">
        <p>{product.name}</p>
        <div className="description">
          <img src={`/assets/${product.image}`}/>
          <div className="details">
            <span>{product.measurement}</span>
            <span>{`$${product.price}`}</span>
            <span>{product.desc}</span>
            <button onClick={() => addToCart(this.props.match.params.id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
  renderNotAvailable() {
    return (
      <h1>Item does not exist</h1>
    )
  }
  render() {
    let { selected, list } = this.props.products,
      listToUse = selected ? selected : list,
      product = listToUse[this.props.match.params.id];

    return (
      <div className="product-page">
        {product ? this.renderProduct(product) : this.renderNotAvailable()}
      </div>
    )
  }
}

export default ProductsConsumer(ProductPage);
