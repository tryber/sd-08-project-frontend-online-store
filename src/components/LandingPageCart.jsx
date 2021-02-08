import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
          <p className="text-center" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>);
    }
    return (
      <section className="row">
        {cartProduct.map((product) => {
          const { [product.id]: acc } = this.state;
          return (
            <Card key={ product.id } className="rounded m-3 shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ product.thumbnail } alt={ product.title } />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
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
            </Card.Body>
          </Card>
          );
        }
        )}
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
