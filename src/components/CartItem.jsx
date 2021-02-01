import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
  render() {
    console.log(this.props);
    const { cartItems } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <ul>
          {
            cartItems.length > 0
              ? cartItems.map((item) => (
                <li key={ item.category_id + item.id }>
                  <p data-testid="shopping-cart-product-name">{item.title}</p>
                  <p data-testid="shopping-cart-product-quantity">{cartItems.length}</p>
                </li>))
              : <p>Carrinho está vazio</p>
          }
        </ul>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

export default CartItem;
