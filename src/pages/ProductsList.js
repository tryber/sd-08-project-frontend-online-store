import React, { Component } from 'react';

class ProductsList extends Component {
  render() {
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductsList;
