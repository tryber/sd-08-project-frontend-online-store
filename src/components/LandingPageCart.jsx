import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingPageCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseAcc = this.increaseAcc.bind(this);
    this.decreaseAcc = this.decreaseAcc.bind(this);
  }

  componentDidMount() {
    const { location: { cartProduct } } = this.props;
    cartProduct.map((product) => this.setState({
      [product.id]: 1,
    }));
  }

  increaseAcc(product) {
    this.setState((prevState) => ({
      [product.id]: prevState[product.id] + 1,
    }));
  }

  decreaseAcc(product) {
    this.setState((prevState) => ({
      [product.id]: prevState[product.id] - 1,
    }));
  }

  render() {
    const { location: { cartProduct } } = this.props;
    if (cartProduct.length < 1) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>);
    }
    return (
      <section>
        {cartProduct.map((product) => {
          const { [product.id]: acc } = this.state;
          return (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
              <p data-testid="shopping-cart-product-quantity">{acc}</p>
              <button
                onClick={ () => this.increaseAcc(product) }
                data-testid="product-increase-quantity"
                type="button"
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseAcc(product) }
                type="button"
              >
                -
              </button>
              <button type="button">x</button>
            </div>);
        })}
      </section>
    );
  }
}

LandingPageCart.propTypes = {
  location: PropTypes.shape({
    cartProduct: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default LandingPageCart;
