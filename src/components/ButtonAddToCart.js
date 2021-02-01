// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class ButtonAddToCart extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // data-testid,
//       onCart: [],
//     }

//     this.addCart = this.addCart.bind(this);
//   }

//   addCart(product) {
//     const { onCart } = this.state;
//     this.setState({ onCart: [...onCart, product] });
//   }

//   render() {
//     const { addCart } = this.props;
//     return (
//       <button
//         type="button"
//         onClick={ () => addCart() }
//         data-testid="product-add-to-cart" // passar como props e alternar, em ProductDetails 'data-testid="product-detail-add-to-cart"' e em ProductList 'data-testid="product-add-to-cart"'
//       >
//         Adicionar ao carrinho
//       </button>
//     );
//   }
// }

// ButtonAddToCart.propTypes = {
//   productSelected: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     thumbnail: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default ButtonAddToCart;
