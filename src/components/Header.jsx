import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ShoppingCart from '../pages/shoppingCart';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    
    return (
      <div>
        <SearchBar />
        <BrowserRouter>
          <Link data-testid="shopping-cart-button" to={ '/shoppingCart' }>Carrinho</Link>
          <Route exact path='/shoppingCart' component={ ShoppingCart } />
        </BrowserRouter>     
      </div>
    );
  }
}

export default Header;
