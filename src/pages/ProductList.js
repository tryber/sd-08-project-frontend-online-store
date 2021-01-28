import React from 'react';
import CategoryList from './categoryList';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <ul><CategoryList />
        </ul>
      </div>
    );
  }
}

export default ProductList;
