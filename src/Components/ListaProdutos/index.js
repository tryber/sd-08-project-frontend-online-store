import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduto from '../CardProduto';

export default class ListaProdutos extends Component {
  componentDidUpdate(prevProps) {
    const { categoryId, onFetchProducts } = this.props;
    if (prevProps.categoryId !== categoryId) {
      onFetchProducts();
    }
  }

  render() {
    const { products, addProductToCart } = this.props;
    const prod = products;

    return (
      <div>
        {
          prod.map((product) => (
            <CardProduto
              key={ product.id }
              product={ product }
              addProductToCart={ addProductToCart }
            />))
        }
      </div>
    );
  }
}

ListaProdutos.propTypes = {
  categoryId: PropTypes.string.isRequired,
  onFetchProducts: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
