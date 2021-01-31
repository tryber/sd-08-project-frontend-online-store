import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { parseCart } from '../helpers/helpers';
import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';
import Header from '../components/Header';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [list, setList] = useState([]);
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setList(parseCart(cart));
  }, [cart]);

  const handleItemAdd = (product) => {
    dispatch(actionAdd(product));
  };

  const handleItemRemove = (id) => {
    dispatch(actionRemove(id));
  };

  const handleClearCart = () => {
    dispatch(actionClear());
  };

  return (
    <main>
      <Header showLogo={ false } showBack />

      <div className="shopping-cart-list">
        {cart.length === 0 ? (
          <div className="cart-empty-message" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        ) : null}
        {list.map((i) => (
          <div className="shopping-cart-list-item" key={ i.id }>
            <div className="item-id" data-testid="shopping-cart-product-name">
              {i.id}
            </div>
            <div className="item-title" data-testid="shopping-cart-product-name">
              {i.title}
            </div>
            <div className="item-price">
              R$
              {parseFloat(i.price).toFixed(2).split('.').join(',')}
            </div>
            <div className="item-count" data-testid="shopping-cart-product-quantity">
              {i.quantity}
            </div>
            <div className="item-control" data-testid="shopping-cart-product-quantity">
              <button type="button" onClick={ () => handleItemAdd({ ...i }) }>
                <i className="fas fa-plus" />
              </button>
              <button type="button" onClick={ () => handleItemRemove(i.id) }>
                <i className="fas fa-minus" />
              </button>
            </div>
            <div className="item-total">
              R$
              {i.total.toFixed(2).split('.').join(',')}
            </div>
          </div>
        ))}
        <button className="cart-clear-button" type="button" onClick={ handleClearCart }>
          Limpar Carrinho
        </button>
      </div>
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
