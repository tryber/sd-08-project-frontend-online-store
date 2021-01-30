import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function Cart(props) {
  const { product } = props;

  return (
    <main>
      <Header showLogo={ false } showBack />
      <div>Details</div>
    </main>
  );
}

Cart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category_id: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mercadopago: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }).isRequired,
  handleCartClick: PropTypes.func.isRequired,
};
