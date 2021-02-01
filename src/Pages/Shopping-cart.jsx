import React from "react";

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.renderProducts = this.renderProducts.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    this.getKeys();
  }

  getKeys() {
    const keysLS = Object.keys(localStorage);
    keysLS.map((element) => this.setState({
      [element]:1,
    }))
  }

  increaseQuantity({ target }) {
    const { id } = target;
    console.log(id);
    this.setState((anterior) => ({
      [id]: anterior[id] + 1,
    }));
  }

  decreaseQuantity({ target }) {
    const { id } = target;
    console.log(id);
  }

  renderProducts() {
    const productsLocalStorage = Object.values(localStorage);
    const stateLocal = this.state;
    console.log(stateLocal);
    const products = productsLocalStorage.map((element) => JSON.parse(element));
    if(stateLocal!==null)
    return (
      <div>
        {products.map((element) => (
          <div key={element.id}>
            <img src={element.thumbnail} alt="Product" />
            <span data-testid="shopping-cart-product-name">
              {element.title}
            </span>
            <button
              type="button"
              id={element.id}
              onClick={this.decreaseQuantity}
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">{stateLocal[element.id]}</span>
            <button
              type="button"
              id={element.id}
              onClick={this.increaseQuantity}
            >
              +
            </button>
            <span>{element.price}</span>
          </div>
        ))}
      </div>
    );
  }

  render() {
    if (localStorage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    if (localStorage.length > 0) {
      console.log("entrei no render");
      return (
        <div>
          Shopping Cart
          {this.renderProducts()}
        </div>
      );
    }
  }
}

export default ShoppingCart;
