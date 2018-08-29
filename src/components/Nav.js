import React from 'react';
import { withRouter } from 'react-router-dom';

import './Nav.css';

class Nav extends React.Component {
  componentDidMount() {
    if(window.location.pathname === '/') {
      this.props.history.push('/browse');
    }
  }
  getPathFromUrl() {
    let path = this.props.location.pathname.match(/[a-z]+/g);
    return path ? path[0] : null;
  }
  isProductView() {
    let id = this.props.location.pathname.match(/\/(\d+)/g);
    return id ? true : false;
  }
  renderButton(text, route) {
    return (
      <li key={text}>
        <button 
          className={text === 'Cart' ? 'btn-cart' : null} 
          onClick={()=>this.props.history.push(route)}
        >{text}</button>
      </li>
    )
  }
  renderNav() {
    switch(this.getPathFromUrl()) {
      case 'browse':
        return [
          this.isProductView() ? this.renderButton('Browse', '/browse') : null,
          this.renderButton('Cart', '/cart')
        ]
      case 'cart':
        return this.renderButton('Browse', '/browse');
      default:
        return null;
    }
  }
  render() {
    return (
      <div className="nav-bar">
        <ul>
          {this.renderNav()}
        </ul>
      </div>
    )
  }
}

export default withRouter(Nav);
