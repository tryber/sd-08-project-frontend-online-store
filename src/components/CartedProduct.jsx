import React from 'react';
import PropTypes from 'prop-types';

class CartedProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  increase() {
    const quantity = this.accessLocalStorageQuantity();
    const { product: { id } } = this.props;
    const { product } = this.props;
    const { available_quantity: availableQuantity } = product;

    quantity.forEach((objQuantity, index) => {
      if(Object.keys(objQuantity)[0] === id) {
        const previousQuantity = quantity[index][id].quantity;
        quantity[index][id].quantity = previousQuantity + 1 > availableQuantity ? previousQuantity : previousQuantity + 1;
      }
    })
    localStorage.setItem('quantity', JSON.stringify(quantity));
    this.updateState();
  }

  decrease() {
    const quantity = this.accessLocalStorageQuantity();
    const { product: { id } } = this.props;
    const { product } = this.props;
    quantity.forEach((objQuantity, index) => {
      if(Object.keys(objQuantity)[0] === id) {
        const previousQuantity = quantity[index][id].quantity;
        quantity[index][id].quantity = previousQuantity > 1 ? previousQuantity - 1 : previousQuantity;
      }
    })
    localStorage.setItem('quantity', JSON.stringify(quantity));
    this.updateState();
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const quantity = this.accessLocalStorageQuantity();
    const { product: { id } } = this.props;
    quantity.map((objQuantity) => {
      if(Object.keys(objQuantity)[0] === id) {
        this.setState({
          quantity: objQuantity[id].quantity,
        })
      }
    })


  }

  accessLocalStorageQuantity() {
    const quantity = JSON.parse(localStorage.quantity);
    return quantity;
  }


  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <li>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <button type="button">X</button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increase }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decrease }
        >
          -
        </button>
        <img src={ product.thumbnail } alt="product model" />
        <h4>{product.price}</h4>
        <h3>Preço Total: {product.price * quantity}</h3>
      </li>
    );
  }
}

export default CartedProduct;

CartedProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};
