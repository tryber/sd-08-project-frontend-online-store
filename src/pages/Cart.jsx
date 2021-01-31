// import React, { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { parseCart } from '../helpers/helpers';
// import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';
// import Header from '../components/Header';
// import CartMessage from '../components/cart/CartMessage';
// import CartItemSum from '../components/cart/CartItemSum';
// import CartItemControl from '../components/cart/CartItemControl';
// import CartItemPrice from '../components/cart/CartItemPrice';
// import CartItemQuantity from '../components/cart/CartItemQuantity';
// import CartButtonClear from '../components/cart/CartButtonClear';
// import CartItemDetail from '../components/cart/CartItemDetail';

// export default function Cart() {
//   const cart = useSelector((state) => state.cart);
//   const [list, setList] = useState(parseCart(cart));
//   const dispatch = useDispatch();
//   const handleItemAdd = (product) => {
//     const item = list[list.findIndex((i) => i.id === product.id)];
//     item.quantity += 1;
//     item.total += parseFloat(item.price);
//     dispatch(actionAdd(product));
//   };
//   const handleItemRemove = (product) => {
//     const item = list[list.findIndex((i) => i.id === product.id)];
//     if (item.quantity > 0) {
//       item.quantity -= 1;
//       item.total -= parseFloat(item.price);
//     }
//     dispatch(actionRemove(item.id));
//   };
//   const handleClearCart = () => {
//     dispatch(actionClear());
//     setList([]);
//   };
//   return (
//     <main>
//       <Header showLogo={ false } showBack />
//       <div className="shopping-cart">
//         <div className="shopping-cart-list">
//           <CartMessage quantity={ list.length } />
//           {list.map((i) => (
//             <div className="shopping-cart-list-item" key={ i.id }>
//               <CartItemDetail id={ i.id } name={ i.title } />
//               <CartItemPrice value={ parseFloat(i.price) } />
//               <CartItemQuantity value={ parseInt(i.quantity) } />
//               <CartItemControl
//                 handleAdd={ () => handleItemAdd({ ...i }) }
//                 handleRemove={ () => handleItemRemove(i) }
//               />
//               <CartItemSum value={ i.total } />
//             </div>
//           ))}
//           <CartButtonClear handleClick={ handleClearCart } />
//         </div>
//       </div>
//     </main>
//   );
// }

// // Cart.propTypes = {
// //   product: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     title: PropTypes.string.isRequired,
// //     category_id: PropTypes.string,
// //     thumbnail: PropTypes.string.isRequired,
// //     price: PropTypes.string.isRequired,
// //     mercadopago: PropTypes.bool.isRequired,
// //     images: PropTypes.arrayOf(PropTypes.string).isRequired,
// //     attributes: PropTypes.arrayOf(
// //       PropTypes.shape({
// //         type: PropTypes.string,
// //         value: PropTypes.string,
// //       }),
// //     ),
// //   }).isRequired,
// // };
