import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  renderButtons = (product) => {
    const { increaseQuantity, decreaseQuantity, deleteProduct } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ increaseQuantity }
          value={ product.title }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ decreaseQuantity }
          value={ product.title }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ deleteProduct }
          value={ product.title }
        >
          X
        </button>
      </div>

    );
  }

  render() {
    const { onCart, sumPrice } = this.props;
    return (
      <div>
        {
          onCart.length > 0 ? onCart.map((product, index) => (
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
        <div>{ sumPrice(onCart)}</div>
        <div>
          <Link
            data-testid="checkout-products"
            to={ {
              pathname: '/checkout',
              state: {
                teste: 'teste',
              },
            } }
          >
            Finalizar Compra
          </Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  onCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  sumPrice: PropTypes.func.isRequired,
};

export default ShoppingCart;
