import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ProdutosCarrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('PRODUTOS')),
    };
  }

  getTotal() {
    const { products } = this.state;
    return products.reduce((total, product) => {
      const { price, quantity } = product;
      return total + price * quantity;
    }, 0);
  }

  remove(index) {
    const { products } = this.state;
    const items = products;
    items.splice(index, 1);
    this.setState({
      products: items,
    });
  }

  increment(item, index) {
    const { products } = this.state;
    const items = products;
    if (item.availableQuantity > item.quantity) item.quantity += 1;
    items.splice(index, 1, item);
    this.setState({
      products: items,
    });
  }

  decrement(item, index) {
    const { products } = this.state;
    const items = products;
    if (item.quantity < 1) {
      return item.quantity;
    }
    item.quantity -= 1;

    items.splice(index, 1, item);
    this.setState({
      products: items,
    });
  }

  updateLocalStorage(products) {
    localStorage.setItem('PRODUTOS', JSON.stringify(products));
  }

  render() {
    const { products } = this.state;
    return (
      <>
        {products.map((product, index) => {
          const { title, thumbnail, price, quantity } = product;

          return (
            <div key={ index }>
              <img src={ `${thumbnail}` } alt="product" />
              <p data-testid="shopping-cart-product-name">{title}</p>
              <p>{price}</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => {
                  this.increment(product, index);
                  this.updateLocalStorage(products);
                } }
              >
                +
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => {
                  this.decrement(product, index);
                  this.updateLocalStorage(products);
                } }
              >
                -
              </button>
              <button
                type="button"
                onClick={ () => {
                  this.remove(product, index);
                  this.updateLocalStorage(products);
                } }
              >
                X
              </button>
              <div data-testid="shopping-cart-product-quantity">{quantity}</div>
            </div>
          );
        })}
        <div className="valorTotal">Total: R$ {this.getTotal()}</div>
      </>
    );
  }
}

// ProdutosCarrinho.propTypes = {
//   cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
