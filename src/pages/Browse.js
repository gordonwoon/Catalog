import React from 'react';

import Products from '../components/Products';
import Filter from '../components/Filter';

import { ProductsConsumer } from '../context/ProductsContext';

import './Browse.css';

class BrowsePage extends React.Component {
  render() {
    let { filters, filterList, selected } = this.props.products;
    return (
      <div className="browse-page">
        <Filter 
          filters={filters}
          filterList={filterList}
          />
        <Products list={selected}/>
      </div>
    )
  }
}

export default ProductsConsumer(BrowsePage);
