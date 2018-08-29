import React from 'react';
import products from '../data/products.json'

export const ProductsContext = React.createContext();

export const ProductsProvider = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      filters: this.formatFilters(),
      list: products.products,
      selected: products.products,
      cart: [],
      setFilters: this.setFilters.bind(this),
      addToCart: this.addToCart.bind(this),
      removeFromCart: this.removeFromCart.bind(this)
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
      return products.filters.reduce((acc, category) => {
        return { ...acc, [category.name]: category.values.reduce((acc, value) => {
          return { ...acc, [value]: false }
        }, {}) };
      }, {});
    }

    setFilters(category, value) {
      let { filters, list, selected } = this.state;
      
      filters[category][value] = !filters[category][value];

      this.setState({
        selected: list.filter(product => {
          return (this.shouldFilter('brand', filters) ? filters.brand[product.brand] : true)
            && (this.shouldFilter('price', filters) ? filters.price[this.getPriceRange(product.price)] : true);
        }),
        filters
      });
    }

    shouldFilter(category, filters) {
      let activeFilter = false;

      Object.keys(filters[category]).forEach(key => {
        activeFilter = activeFilter || filters[category][key]
      });

      return activeFilter;
    }

    addToCart(index) {
      let { cart, selected } = this.state;

      cart.push(selected[index]);

      this.setState({ cart });
    }

    removeFromCart(index) {
      let { cart } = this.state;

      cart.splice(index, 1);

      this.setState({ cart });
    }

    getPriceRange(productPrice) {
      let price = parseFloat(productPrice);
      if(price < 1) {
        return '0-0.99';
      }
      else if(price >= 1 && price < 2) {
        return '1-1.99';
      }
      else if(price >= 2 && price < 3) {
        return '2-2.99';
      }
      else {
        return null
      }
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
