import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import BrowsePage from './pages/Browse';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';

import { ProductsProvider } from './context/ProductsContext';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/browse" component={BrowsePage}/>
        <Route exact path="/browse/:id" component={ProductPage}/>
        <Route exact path="/cart" component={CartPage}/>
      </div>
    )
  }
}

export default ProductsProvider(App);
