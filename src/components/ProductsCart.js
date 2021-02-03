import React from 'react';
import PropTypes from 'prop-types';

class ProductsCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCart: [],
      quant: props.product.quant,
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  handleClick({ target }) {
    const { productsCart } = this.state;
    const { product: { id } } = this.props;
    const product = productsCart.find((item) => item.id === id);
    this.increaseOrDecrease(target, product);
  }

  increaseOrDecrease(target, product) {
    const { productsCart, quant } = this.state;
    const { product: { id }, updateQuant } = this.props;
    if (target.name === 'increase') {
      product.quant += 1;
      this.setState({
        productsCart: [...productsCart],
        quant: product.quant,
      });
      updateQuant(quant, id, target.name);
    } else {
      product.quant -= 1;
      this.setState({
        productsCart: [...productsCart],
        quant: product.quant,
      });
      updateQuant(quant, id, target.name);
    }
  }

  updateState() {
    const getProductsStorage = JSON.parse(localStorage.getItem('productsCart'));
    this.setState({
      productsCart: getProductsStorage,
    });
  }

  render() {
    const { quant } = this.state;
    const { product: { title, price } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <span>
          R$
          {price}
        </span>
        <span>
          <button
            type="button"
            name="decrease"
            data-testid="product-decrease-quantity"
            onClick={ this.handleClick }
            disabled={ quant <= 0 }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{quant}</span>
          <button
            type="button"
            name="increase"
            data-testid="product-increase-quantity"
            onClick={ this.handleClick }
          >
            +
          </button>
        </span>
      </div>
    );
  }
}

ProductsCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quant: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  updateQuant: PropTypes.func.isRequired,
};

export default ProductsCart;
