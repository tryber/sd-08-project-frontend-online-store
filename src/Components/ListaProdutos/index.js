import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import CardProduto from '../CardProduto';

export default class ListaProdutos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { categoryId } = this.props;
    if (prevProps.categoryId !== categoryId) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    const { inputStatus, categoryId } = this.props;
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery(categoryId, inputStatus)
      .then((data) => {
        this.setState({
          products: data.results,
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Buscar
        </button>
        <div className="container-product-list">
          { products.map((product) => (
            <CardProduto
              key={ product.id }
              product={ product }
            />))}
        </div>
      </div>
    );
  }
}

ListaProdutos.propTypes = {
  inputStatus: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
