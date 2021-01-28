import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">carrinho</Link>
        <label data-testid="home-initial-message" htmlFor="input-search">
          <input type="text" id="input-search" />
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </label>
      </div>
    );
  }
}

export default Home;
