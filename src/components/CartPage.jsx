import React from 'react';
import PropTypes from 'prop-types';
import ProductOnCart from './ProductOnCart';
import './CartPage.css';

class CartPage extends React.Component {
  render() {
    const { productsOnCart } = this.props;

    if (productsOnCart.length === 0) {
      return (
        <p
          className="emptyCart"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>);
    }
    return (
      <div className="mainCartPage">
        <div className="listOfProducts">
          { productsOnCart.map((product) => (<ProductOnCart
            key={ product.id }
            product={ product }
          />))}
        </div>
        <div className="totalPrice">
          TOTAL
        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  productsOnCart: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CartPage;
