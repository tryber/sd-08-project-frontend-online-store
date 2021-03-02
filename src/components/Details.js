import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Details extends Component {
  constructor() {
    super();
    this.state = { produto: {} };

    this.buscaProduto = this.buscaProduto.bind(this);
  }

  componentDidMount() {
    this.buscaProduto();
  }

  async buscaProduto() {
    const { match: { params: { categoryId, id } } } = this.props;
    const request = await getProductsFromCategoryAndQuery(categoryId, '');
    const produto = request.results.find((item) => (item.id === id));
    this.setState({ produto });
  }

  render() {
    const { produto } = this.state;
    const { addAoCarrinho } = this.props;
    return (
      <div>
        <button
          type="button"
        >
          <Link data-testid="shopping-cart-button" to="/shoplist">Carrinho</Link>
        </button>
        <h4 data-testid="product-detail-name">
          Produto:
          {produto.title}
        </h4>
        <img alt="imagem do produto" src={ produto.thumbnail } />
        <h5>
          Preço: R$
          {produto.price}
        </h5>
        <button
          type="button"
          onClick={ () => {
            addAoCarrinho(produto);
          } }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addAoCarrinho: PropTypes.func.isRequired,
};
