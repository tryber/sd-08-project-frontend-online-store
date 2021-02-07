import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import './DisplayQuantity.css';

class DisplayQuantity extends Component {
  constructor(props) {
    super(props);
    const { quantity, availableQuantity } = this.props;
    this.state = {
      quantity,
      availableQuantity,
    };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  decrementQuantity() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  }

  incrementQuantity() {
    const { quantity, availableQuantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState({ quantity: quantity + 1 });
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="diplay-container">
        <FaMinusSquare
          data-testid="product-decrease-quantity"
          className="controller"
          onClick={ this.decrementQuantity }
        />
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <FaPlusSquare
          data-testid="product-increase-quantity"
          className="controller"
          onClick={ this.incrementQuantity }
        />
      </div>
    );
  }
}

DisplayQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default DisplayQuantity;
