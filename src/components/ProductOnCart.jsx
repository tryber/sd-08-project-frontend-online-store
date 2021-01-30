import React from 'react';
import PropTypes from 'prop-types';
import './ProductOnCart.css';

class ProductOnCart extends React.Component {
  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  decrement() {
    const { quantity } = this.state;
    let newQtd = quantity - 1;
    if (newQtd < 0) newQtd = 0;
    this.setState(() => ({ quantity: newQtd }));
  }

  increment() {
    const { quantity } = this.state;
    const newQtd = quantity + 1;
    this.setState(() => ({ quantity: newQtd }));
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    const { thumbnail, title } = product;

    return (
      <div className="productOnCart">
        <div className="cartImgDiv">
          <img src={ thumbnail } alt="Thumb" />
        </div>
        <h4 data-testid="shopping-cart-product-name">
          { title }
        </h4>
        <div className="quantidadeDiv">
          <button type="button" onClick={ this.decrement } data-testid="product-decrease-quantity">-</button>
          <div data-testid="shopping-cart-product-quantity">
            { quantity }
          </div>
          <button type="button" onClick={ this.increment } data-testid="product-increase-quantity">+</button>
        </div>
      </div>
    );
  }
}

ProductOnCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductOnCart;
