import React from 'react';
import PropTypes from 'prop-types';
import './ProductOnCart.css';

class ProductOnCart extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.state = {
      quantity: props.product.amountToBuy,
    };
  }

  add() {
    const { quantity } = this.state;
    const { product } = this.props;
    let newQtd = quantity - 1;
    if (newQtd < 0) newQtd = 0;
    product.amountToBuy = newQtd;
    this.setState(() => ({ quantity: newQtd }));
  }

  sub() {
    const { quantity } = this.state;
    const { product } = this.props;
    const newQtd = quantity + 1;
    product.amountToBuy = newQtd;
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
          <button
            type="button"
            onClick={ this.add }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <div data-testid="shopping-cart-product-quantity">
            { +quantity }
          </div>
          <button
            type="button"
            onClick={ this.sub }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ProductOnCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductOnCart;
