import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
      </div>
    );
  }
}

export default ProductList;
