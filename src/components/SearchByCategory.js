import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchByCategory extends Component {
  render() {
    const { produtos, addAoCarrinho } = this.props;
    return (
      <div>
        { produtos.length > 0 && produtos.map((produto) => (
          <section key={ produto.id } data-testid="product">
            <p>{ produto.title }</p>
            <span>{ produto.price }</span>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => addAoCarrinho(produto) }
            >
              Adicionar ao carrinho
            </button>
            <img src={ produto.thumbnail } alt="Imagem do produto" />
          </section>
        )) }
      </div>
    );
  }
}

SearchByCategory.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addAoCarrinho: PropTypes.func.isRequired,
};
