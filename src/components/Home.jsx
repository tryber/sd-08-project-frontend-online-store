import React from 'react';

import ShoppingCartIcon from './ShoppingCartIcon';
import ProductList from './ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="header-navbar">
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <ShoppingCartIcon />
        </nav>
        <ProductList />
      </div>
    );
  }
}

export default Home;
