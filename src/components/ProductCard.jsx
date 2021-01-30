import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from '../helpers/helpers';

export default function ProductCard(props) {
  const {
    product: { title, images, price },
  } = props;

  const aprice = parsePrice(price);

  const handleAddCart = () => {
    const { product, handleAddCartClick } = props;
    if (handleAddCartClick) {
      handleAddCartClick(product);
    }
  };

  return (
    <section className="product-card">
      <section className="product-card-image">
        <img src={ images } alt={ title } />
      </section>

      <section className="product-card-info">
        <div className="product-card-info-price">
          <span className="price-part-1">R$</span>
          <span className="price-part-2">{aprice.split(',')[0]}</span>
          <span className="price-part-3">{aprice.split(',')[1]}</span>
        </div>
        <span className="product-card-info-title">{title}</span>
      </section>

      <section className="product-card-buy">
        <button className="buy-button" type="button" onClick={ handleAddCart }>
          Adicionar ao Carrinho
        </button>
      </section>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category_id: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mercadopago: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }).isRequired,
  handleAddCartClick: PropTypes.func.isRequired,
};
