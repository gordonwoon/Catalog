import React from 'react';
import products from '../data/products.json'

export const ProductsContext = React.createContext();

export const ProductsProvider = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      filters: products.filters,
      list: products.products,
      selected: products.products,
      filterList: this.filterList.bind(this)
    };

    filterList(name, value) {
      let { list } = this.state;
      this.setState({
        selected: list.filter(product => product.brand === name)
      });
    }
    
    render() {
      return(
        <ProductsContext.Provider value={this.state}>
          <WrappedComponent {...this.props}/>
        </ProductsContext.Provider>
      );
    }
  }
}

export const ProductsConsumer = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <ProductsContext.Consumer>
          {products => <WrappedComponent products={products} {...this.props} />}
        </ProductsContext.Consumer>
      );
    }
  }
}
