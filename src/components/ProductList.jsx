import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}

export default ProductList;
