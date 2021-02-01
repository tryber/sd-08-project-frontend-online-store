import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProdutos extends React.Component {
  render() {
    const { products: { title, thumbnail, price,
      shipping: { free_shipping: freeShipping }, installments }, addToCart } = this.props;

    return (
      <Link to={ `/produto/${id}` } data-testid="product-detail-link">
        <div data-testid="product" className="product">
          <img src={ thumbnail } alt={ title } className="product-img" />
          <div className="product-info-wraper">
            <p className="product-price">{ `R$${price}` }</p>
            {
              installments
            && (
              <div>
                em
                <span className={ installments.rate === 0 ? 'sem-juros' : '' }>
                  {` ${installments.quantity}x R$${installments.amount} `}
                  { installments.rate === 0 && 'sem juros' }
                </span>
              </div>
            )
            }
            {freeShipping
          && <p className="frete-gratis" data-testid="free-shipping">Frete grátis</p>}
          <h2>{ title }</h2>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(title) }
          >
            Adicionar ao carrinho
          </button>

        </div>
      </Link>
    );
  }
}

CardProdutos.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
    installments: PropTypes.shape({
      amount: PropTypes.number,
      currency_id: PropTypes.string,
      quantity: PropTypes.number,
      rate: PropTypes.number,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardProdutos;
