import React from 'react';

import Products from '../components/Products';
import Filter from '../components/Filter';

import { ProductsConsumer } from '../context/ProductsContext';

import './Browse.css';

class BrowsePage extends React.Component {
  render() {
    let { filters, setFilters, selected } = this.props.products;
    return (
      <div className="browse-page">
        <Filter 
          filters={filters}
          setFilters={setFilters}
          />
        <Products list={selected}/>
      </div>
    )
  }
}

export default ProductsConsumer(BrowsePage);
