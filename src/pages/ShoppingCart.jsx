import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  renderButtons(product) {
    const { increaseQty, decreaseQty, deleteItem } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ decreaseQty }
          value={ product.title }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ increaseQty }
          value={ product.title }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ deleteItem }
          value={ product.title }
        >
          X
        </button>
      </div>

    );
  }

  render() {
    const { cart, totalPrice } = this.props;
    return (
      <div>
        {
          cart.length > 0 ? cart.map((product, index) => (
            <div key={ index }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
              <p>{ product.price }</p>
              <p data-testid="shopping-cart-product-quantity">{ product.amount}</p>
              {this.renderButtons(product)}
            </div>
          ))
            : (
              <div>
                <p data-testid="shopping-cart-empty-message">
                  Seu carrinho está vazio
                </p>
              </div>)
        }
        <div>{ totalPrice(cart)}</div>
        <div />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.func.isRequired,
};

export default ShoppingCart;
