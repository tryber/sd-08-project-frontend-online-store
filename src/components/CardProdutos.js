import React from 'react';
import PropTypes from 'prop-types';

class CardProdutos extends React.Component {
  render() {
    const { products: { title, thumbnail, price,
      shipping: { free_shipping: freeShipping }, installments } } = this.props;
    return (
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
        </div>
      </div>
    );
  }
}

CardProdutos.propTypes = {
  products: PropTypes.shape({
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
};

export default CardProdutos;
