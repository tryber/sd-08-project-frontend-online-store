import React from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

import * as api from '../services/api';

export default function Cart(props) {
  // const { product } = props;
  const { id, title } = useParams();

  api.getCategories();
  api.getProductsFromCategoryAndQuery();

  return (
    <main>
      <Header showLogo={ false } showBack />
      <div>
        Cart
        {id}
      </div>
      <div data-testid="shopping-cart-empty-message">
        {title || 'Seu carrinho está vazio'}
      </div>
      <div data-testid="shopping-cart-product-name">
        {title ? title.split('-').join(' ') : ''}
      </div>
      <div data-testid="shopping-cart-product-quantity">1</div>
    </main>
  );
}

// Cart.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     category_id: PropTypes.string,
//     thumbnail: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     mercadopago: PropTypes.bool.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     attributes: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string,
//         value: PropTypes.string,
//       }),
//     ),
//   }).isRequired,
// };
