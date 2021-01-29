import React from 'react';

import ShoppingCartIcon from './ShoppingCartIcon';
import Category from './Category';
import ProductList from './ProductList';

class Home extends React.Component {
  render() {
    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList />
        <ShoppingCartIcon />
        <Category />
      </>
    );
  }
}

export default Home;
