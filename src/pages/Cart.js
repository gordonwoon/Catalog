import React from 'react';

import Gallery from '../components/Gallery';

import { ProductsConsumer } from '../context/ProductsContext';

import './Cart.css';

class CartPage extends React.Component {
  render() {
    let { cart, removeFromCart } = this.props.products;
    return (
      <div className="cart-page">
        <Gallery list={cart} handleClick={removeFromCart} btnName="Remove From Cart"/>
      </div>
    )
  }
}

export default ProductsConsumer(CartPage);
