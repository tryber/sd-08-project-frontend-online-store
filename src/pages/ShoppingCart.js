import React from 'react';
import ProductsCart from '../components/ProductsCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      products: [],
    };
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
    this.updateQuant = this.updateQuant.bind(this);
    this.updateState = this.updateState.bind(this);
    this.saveInStorage = this.saveInStorage.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateTotalPrice() {
    const { products } = this.state;
    if (products) {
      const totalPrice = products.reduce((acc, product) => {
        acc += product.price * product.quant;
        return acc;
      }, 0);
      this.setState({
        total: totalPrice,
      });
    }
  }

  updateState() {
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));
    if (productsCart) {
      const totalPrice = productsCart.reduce((acc, product) => {
        acc += product.price * product.quant;
        return acc;
      }, 0);
      this.setState({
        products: productsCart,
        total: totalPrice,
      });
    }
  }

  updateQuant(quant, id, targetName) {
    const { products } = this.state;
    const findProduct = products.find((product) => product.id === id);
    findProduct.quant = targetName === 'increase' ? quant + 1 : quant - 1;
    this.setState({
      products: [...products],
    });
    this.updateTotalPrice();
    this.saveInStorage();
  }

  saveInStorage() {
    this.setState(({ products }) => ({
      products: [...products],
    }), () => {
      const { products } = this.state;
      localStorage.setItem('productsCart', JSON.stringify(products));
    });
  }

  render() {
    const { total, products } = this.state;
    if (products.length === 0) {
      return (
        <h1
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h1>);
    }
    return (
      <div>
        <h1>Carrinho</h1>
        {products.map((product) => (
          <ProductsCart
            key={ product.id }
            product={ product }
            updateQuant={ this.updateQuant }
          />))}
        <hr />
        <div>
          <span>{`Total: R$${total}`}</span>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
