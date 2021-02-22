import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const allProducts = JSON.parse(localStorage.getItem('allProducts'));
    const emptyCartAnswer = localStorage.getItem('emptyCart');
    this.state = {
      products: allProducts || [],
      emptyCart: emptyCartAnswer || false,
    };
    this.renderCart = this.renderCart.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.increaseProduct = this.increaseProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      this.updateProduct();
    } catch (e) {
      this.updateState();
    }
  }

  handleSubmit() {
    const { emptyCart } = this.state;
    // localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('emptyCart', emptyCart);
  }

  updateProduct() {
    const { products } = this.state;
    this.state({ emptyCart: true });
    console.log(products);
  }

  updateState() {
    const { products } = this.state;
    if (products.length > 0) {
      this.setState({ emptyCart: true });
    }
    // this.setState({ emptyCart: false });
  }

  increaseProduct(item) {
    const { products } = this.state;
    products.forEach((product) => {
      if (product.id === item.id) {
        product.quantity += 1;
        this.setState((prevQuantity) => ({
          [product.id]: prevQuantity[product.quantity],
        }));
      }
    });
  }

  decreaseProduct(item) {
    const { products } = this.state;
    products.forEach((product) => {
      if (product.id === item.id && product.quantity > 0) {
        product.quantity -= 1;
        this.setState((prevQuantity) => ({
          [product.id]: prevQuantity[product.quantity],
        }));
      }
    });
  }

  renderCart() {
    const { products } = this.state;
    this.handleSubmit();
    return (
      products.map((product) => (
        <div key={ product.id } data-testid="product">
          <p data-testid="shopping-cart-product-name">{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>
            R$:
            { product.price }
          </p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.decreaseProduct(product) }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.increaseProduct(product) }
          >
            +
          </button>
          <p>
            Total R$:
            {' '}
            { product.price * product.quantity }
          </p>
        </div>
      ))
    );
  }

  render() {
    const cart = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    const { emptyCart } = this.state;
    return (
      <div>
        { emptyCart ? this.renderCart() : cart }
        <Link to="/">Voltar</Link>
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
