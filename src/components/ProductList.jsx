import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
        <Link data-testid="shopping-cart-button" to="/shopping-cart" />
      </div>
    );
  }
}

export default ProductList;
