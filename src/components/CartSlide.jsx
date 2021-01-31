import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { parseCart } from '../helpers/helpers';
import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';

import CartMessage from './cart/CartMessage';
import CartItemSum from './cart/CartItemSum';
import CartItemControl from './cart/CartItemControl';
import CartItemPrice from './cart/CartItemPrice';
import CartItemQuantity from './cart/CartItemQuantity';
import CartButtonClear from './cart/CartButtonClear';
import CartItemDetail from './cart/CartItemDetail';
import CartMenu from './cart/CartMenu';

export default function CartSlide() {
  const cart = useSelector((state) => state.cart);
  const control = useSelector((state) => state.control);
  const [list, setList] = useState(parseCart(cart));
  const [update, setUpdate] = useState(0);

  const dispatch = useDispatch();
  const handleItemAdd = (product) => {
    const item = list[list.findIndex((i) => i.id === product.id)];
    item.quantity += 1;
    item.total += parseFloat(item.price);
    dispatch(actionAdd(product));
  };
  const handleItemRemove = (product) => {
    const item = list[list.findIndex((i) => i.id === product.id)];
    if (item.quantity > 0) {
      item.quantity -= 1;
      item.total -= parseFloat(item.price);
    }
    dispatch(actionRemove(item.id));
  };
  const handleClearCart = () => {
    dispatch(actionClear());
    setList([]);
  };

  useEffect(() => {
    if (update <= control.updatecart) {
      setList(parseCart(cart));
    }
    setUpdate(control.updatecart);
    //
  }, [control]);
  return (
    <div id="cart-slide" className="cart-slide">
      <CartMenu />
      <div className="slide-shopping-cart">
        <div className="slide-shopping-cart-list">
          <CartMessage quantity={ list.length } />
          {list.map((i) => (
            <div className="shopping-cart-list-item" key={ i.id }>
              <div className="cart-slide-box">
                <CartItemDetail id={ i.id } name={ i.title } />
              </div>
              <CartItemPrice value={ parseFloat(i.price) } />
              <CartItemQuantity value={ parseInt(i.quantity) } />
              <CartItemControl
                handleAdd={ () => handleItemAdd({ ...i }) }
                handleRemove={ () => handleItemRemove(i) }
              />
              <CartItemSum value={ i.total } />
            </div>
          ))}
          <CartButtonClear handleClick={ handleClearCart } />
        </div>
      </div>
    </div>
  );
}
