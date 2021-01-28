import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default LandingPage;
