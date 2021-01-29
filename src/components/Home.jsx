import React from 'react';

import ShoppingCartIcon from './ShoppingCartIcon';
import Category from './Category';

class Home extends React.Component {
  render() {
    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ShoppingCartIcon />
        <Category />
      </>
    );
  }
}

export default Home;
