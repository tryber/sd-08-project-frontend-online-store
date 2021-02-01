import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {

  render() {
    const { productList, handleChange, handleClick } = this.props;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            name="search"
            placeholder="Encontre seu produto"
            onChange={ handleChange }
          />
        </h3>
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          PESQUISAR
        </button>
        { productList.map((product) => (
          <ProductCard key={ product.id } product={ product } />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
