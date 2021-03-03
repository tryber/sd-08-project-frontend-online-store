import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { produtos, addAoCarrinho } = this.props;
    return (
      <div className="lista-produtos">
        { produtos.map((produto) => (
          <section className="produto-card" key={ produto.id } data-testid="product">
            <p>{ produto.title }</p>
            <span>
              R$
              { produto.price }
            </span>
            {produto.shipping.free_shipping && (
              <span data-testid="free-shipping">
                Frete Gratis
              </span>)}
            <img src={ produto.thumbnail } alt="Imagem do produto" />
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => addAoCarrinho(produto) }
            >
              Adicionar ao carrinho
            </button>
            <Link
              data-testid="product-detail-link"
              to={ `/details/${produto.category_id}/${produto.id}` }
            >
              Detalhes do Produto
            </Link>
          </section>

        )) }
      </div>
    );
  }
}

ProductCard.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addAoCarrinho: PropTypes.func.isRequired,
};
