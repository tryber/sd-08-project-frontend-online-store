import React from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';
import CardProduto from './CardProduto';

export default class ListaProdutos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objectAPI: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { categoryId } = this.props;
    if (prevProps.categoryId !== categoryId) {
      this.handleClick();
    }
  }

  handleClick() {
    const { inputStatus, categoryId } = this.props;
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery(categoryId, inputStatus)
      .then((products) => {
        this.setState({
          objectAPI: products.results,
        });
      });
  }

  render() {
    const { objectAPI } = this.state;

    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <div className="container-product-list">
          { objectAPI.map((product) => (<CardProduto
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
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
