import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduto from '../CardProduto';

export default class ListaProdutos extends Component {
  constructor() {
    super();
    this.handleOrdenation = this.handleOrdenation.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { categoryId, onFetchProducts } = this.props;
    if (prevProps.categoryId !== categoryId) {
      onFetchProducts();
    }
  }

  handleOrdenation(orderFilter, prod) {
    if (orderFilter === 'increasePrice') {
      prod.sort((a, b) => {
        const menos = -1;
        if (a.price < b.price) {
          return menos;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    if (orderFilter === 'decreasePrice') {
      prod.sort((a, b) => {
        const menos = -1;
        if (a.price > b.price) {
          return menos;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
    return prod;
  }

  render() {
    const { products, addProductToCart, orderFilter } = this.props;
    const prod = products;

    return (
      <div>
        {
          this.handleOrdenation(orderFilter, prod)
            .map((product) => (
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
  orderFilter: PropTypes.string.isRequired,
};
