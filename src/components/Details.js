import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';
import FormDetails from './FormDetails';

export default class Details extends Component {
  constructor() {
    super();
    this.state = { produto: {}, id: '' };

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
    const { produto, id } = this.state;
    const { addAoCarrinho, totalLength } = this.props;
    // const total = contador.length > 0 ? contador.reduce((acc, curr) => acc + curr, 0) : 0;

    return (
      <>
        <div>
          <button
            type="button"
          >
            <Link
              data-testid="shopping-cart-button"
              to="/shoplist"
            >
              Carrinho
              <span data-testid="shopping-cart-size">{totalLength}</span>
            </Link>
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
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              addAoCarrinho(produto);
            } }
          >
            Adicionar ao carrinho
          </button>

        </div>
        <div>
          <FormDetails id={ id } />
        </div>
      </>
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
  totalLength: PropTypes.number.isRequired,
};
