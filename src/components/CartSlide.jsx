import React, { useState } from 'react';
// , useEffect
import { useSelector, useDispatch } from 'react-redux';
import { parseCart } from '../helpers/helpers';
import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';

import CartMessage from './cart/CartMessage';
import CartMenu from './cart/CartMenu';
import CartListItem from './cart/CartListItem';
import CartButtonBox from './cart/CartButtonBox';

// useEffect(() => {
//   if (update <= control.updatecart) {
//     setList(parseCart(cart));
//   }
//   setUpdate(control.updatecart);
// }, [control]);

export default function CartSlide() {
  const cart = useSelector((state) => state.cart);
  // const control = useSelector((state) => state.control);
  const [list, setList] = useState(parseCart(cart));
  // const [update, setUpdate] = useState(0);
  const dispatch = useDispatch();
  const handleItemAdd = (product) => {
    const item = list[list.findIndex((i) => i.id === product.id)];
    if (item.quantity < item.stock) {
      item.total += parseFloat(item.price);
      item.quantity += 1;
      dispatch(actionAdd(product));
    }
  };
  const handleItemRemove = (product) => {
    const item = list[list.findIndex((i) => i.id === product.id)];
    if (item.quantity > 0) {
      item.quantity -= 1;
      item.total -= parseFloat(item.price);
      dispatch(actionRemove(item.id));
    }
  };
  const handleClearCart = () => {
    dispatch(actionClear());
    setList([]);
  };

  return (
    <div id="cart-slide" className="cart-slide">
      <CartMenu />
      <div className="slide-shopping-cart">
        <div className="slide-shopping-cart-list">
          <CartMessage quantity={ list.length } />
          {list.map((i) => (
            <CartListItem
              key={ i.id }
              item={ i }
              handleItemAdd={ () => handleItemAdd({ ...i }) }
              handleItemRemove={ () => handleItemRemove(i) }
            />
          ))}
          <CartButtonBox handleClearCartClick={ handleClearCart } />
        </div>
      </div>
    </div>
  );
}
