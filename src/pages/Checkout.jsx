import React from 'react';
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
// import { parseCart } from '../helpers/helpers';
// import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';

export default function Checkout() {
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  // const [list, setList] = useState(parseCart(cart));

  // const handleItemAdd = (product) => {
  //   const item = list[list.findIndex((i) => i.id === product.id)];
  //   item.quantity += 1;
  //   item.total += parseFloat(item.price);
  //   dispatch(actionAdd(product));
  // };
  // const handleItemRemove = (product) => {
  //   const item = list[list.findIndex((i) => i.id === product.id)];
  //   if (item.quantity > 0) {
  //     item.quantity -= 1;
  //     item.total -= parseFloat(item.price);
  //   }
  //   dispatch(actionRemove(item.id));
  // };
  // const handleClearCart = () => {
  //   dispatch(actionClear());
  //   setList([]);
  // };

  return (
    <main>
      <Header showCheckout={ false } showLogo={ false } showBack />
      <div className="checkout" />
    </main>
  );
}
