import React from 'react';
import products from '../data/products.json'

export const ProductsContext = React.createContext();

export const ProductsProvider = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      filters: this.formatFilters(),
      list: products.products,
      selected: products.products,
      setFilters: this.setFilters.bind(this)
    };

    formatFilters() {
      return products.filters.reduce((acc, filter) => {
        return { [filter.name]: filter.values.reduce((acc, value) => {
          return { [value]: false, ...acc }
        }, {}), ...acc };
      }, {});
    }

    setFilters(name, value) {
      let { filters } = this.state;
      
      filters[name][value] = !filters[name][value]
      this.setState({ filters });
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
