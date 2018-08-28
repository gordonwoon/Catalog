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

    /**
     * desired format:
     * filters: {
     *  category1: {
     *    option1: false,
     *    option2: true,
     *  },
     *  cateogory2: {
     *    option1: true 
     *  }
     * }
     */
    formatFilters() {
      return products.filters.reduce((acc, filter) => {
        return { ...acc, [filter.name]: filter.values.reduce((acc, value) => {
          return { ...acc, [value]: false }
        }, {}) };
      }, {});
    }

    setFilters(name, value) {
      let { filters, list, selected } = this.state;
      
      filters[name][value] = !filters[name][value]

      this.setState({
        selected: this.state.list.filter(product => {
          return filters.brand[product.brand];
        }),
        filters
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
