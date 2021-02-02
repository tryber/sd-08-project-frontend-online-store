import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const allProducts = JSON.parse(localStorage.getItem('products'));
    const allQuantity = JSON.parse(localStorage.getItem('quantity'));
    const emptyCartAnswer = localStorage.getItem('emptyCart');
    this.state = {
      products: allProducts || [],
      emptyCart: emptyCartAnswer || false,
      quantity: allQuantity || 1,
    };
    this.renderCart = this.renderCart.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.increaseProduct = this.increaseProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    try {
      this.updateProduct();
      this.updateQuantity();
    } catch (e) {
      this.updateState();
    }
  }

  handleSubmit() {
    const { products, quantity, emptyCart } = this.state;
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    localStorage.setItem('emptyCart', emptyCart);
  }

  updateQuantity() {
    // let { quantity } = this.state;
    // quantity.push([1]);
    // console.log(quantity);
    // this.setState({ quantity: quantity });
  }

  updateProduct() {
    const { location: { state: { product } } } = this.props;
    const { products } = this.state;
    this.setState({
      products: [...products, product],
      emptyCart: true,
    });
  }

  updateState() {
    this.setState({ emptyCart: false });
  }

  increaseProduct() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decreaseProduct() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  }

  renderCart() {
    const { products, quantity } = this.state;
    this.handleSubmit();
    console.log(products);
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
            onClick={ this.decreaseProduct }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.increaseProduct }
          >
            +
          </button>
          <p>
            Total R$
            { product.price * quantity }
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
