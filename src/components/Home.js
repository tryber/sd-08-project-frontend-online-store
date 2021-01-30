import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ListCategories from './ListCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <ListCategories />
        <Search />
      </div>
    );
  }
}

export default Home;
