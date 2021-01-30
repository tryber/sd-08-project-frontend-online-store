import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import CardImage from './card/CardImage';
import CardInfo from './card/CardInfo';

const DEF_CART_KEY = 'CART_ITENS';

export default function ProductCard(props) {
  const {
    product: { id, title, thumbnail, price },
  } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/product/${id}/${title}`);
  };
  const handleBuyClick = () => {
    const { product } = props;
    const data = localStorage.getItem(DEF_CART_KEY);
    if (data === '' || !data) {
      localStorage.setItem(DEF_CART_KEY, JSON.stringify([product]));
    } else {
      const cart = JSON.parse(data);
      cart.push(product);
      localStorage.setItem(DEF_CART_KEY, JSON.stringify(cart));
    }
  };
  return (
    <section className="product-card-wraper">
      <button
        type="button"
        className="product-card"
        data-testid="product-detail-link"
        onClick={ handleClick }
      >
        <CardImage url={ thumbnail } alt={ title } />
        <CardInfo price={ price } title={ title } />
      </button>
      <section className="product-buy">
        <button
          className="product-buy-button"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ handleBuyClick }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category_id: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mercadopago: PropTypes.bool.isRequired,
  }).isRequired,
};
