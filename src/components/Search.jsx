import React from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

class Search extends React.Component {
  render() {
    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ShoppingCartIcon />
      </>
    );
  }
}

export default Search;
