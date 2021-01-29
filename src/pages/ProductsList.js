import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
  render() {
    return (
      <main>
        <input type="text" />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductsList;
