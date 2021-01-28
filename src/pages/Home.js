import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
