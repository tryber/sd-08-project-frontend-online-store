import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      emptyCart: false,
    };
    this.renderCart = this.renderCart.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    try {
      this.updateProduct();
    } catch (err) {
      this.updateState();
    }
  }

  updateProduct() {
    const { location: { state: { product } } } = this.props;
    this.setState({
      products: product,
      emptyCart: true,
    });
  }

  updateState() {
    this.setState({ emptyCart: false });
  }

  renderCart() {
    const { products } = this.state;
    return (
      <div key={ products.id } data-testid="product">
        <p data-testid="shopping-cart-product-name">{ products.title }</p>
        <img src={ products.thumbnail } alt={ products.title } />
        <p>
          R$:
          { products.price }
        </p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }

  render() {
    const cart = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    const { emptyCart } = this.state;
    return (
      <div>
        { emptyCart ? this.renderCart() : cart }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
