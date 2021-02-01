import React from 'react';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const { products } = this.state;
    const arrayOfProducts = Object.keys(localStorage);
    arrayOfProducts.map(async (productId) => {
      const product = await api.getProduct(productId);
      products.push(product);
      this.setState({ products });
    });
  }

  renderProducts() {
    const { products } = this.state;
    if (products.length > 0) {
      return (
        <div>
          { products.map((element) => (
            <div key={ element.id }>
              <img src={ element.thumbnail } alt="Product" />
              <span data-testid="shopping-cart-product-name">{element.title}</span>
              <label htmlFor="input-quantity">
                Quantidade
                <input
                  id="input-quantity"
                  type="number"
                  data-testid="shopping-cart-product-quantity"
                  min="1"
                  max={ element.available_quantity }
                />
              </label>
              <span>{element.price}</span>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    if (products.length > 0) {
      return (
        <div>
          Shopping Cart
          { this.renderProducts() }
        </div>
      );
    }
  }
}

export default ShoppingCart;
