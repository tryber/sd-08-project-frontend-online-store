import React from "react";

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.renderProducts = this.renderProducts.bind(this);
<<<<<<< HEAD
    this.increaseQuantity = this.increaseQuantity.bind(this);
=======
    this.getKeys = this.getKeys.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
>>>>>>> 5cfcd5d0636f931053fc06f92e7cba0885458be9
  }

  componentDidMount() {
    this.getKeys();
  }

  getKeys() {
    const keysLS = Object.keys(localStorage);
<<<<<<< HEAD
    keysLS.map((element) => this.setState({
      [element]:1,
    }))
  }

  increaseQuantity({ target }) {
    const { id } = target;
    console.log(id);
=======
    keysLS.map((element) => this.setState({ [element]: 1 }));
  }

  addProduct({ target }) {
    const { id } = target;
>>>>>>> 5cfcd5d0636f931053fc06f92e7cba0885458be9
    this.setState((anterior) => ({
      [id]: anterior[id] + 1,
    }));
  }

<<<<<<< HEAD
  decreaseQuantity({ target }) {
    const { id } = target;
    console.log(id);
=======
  lessProduct({ target }) {
    const { id } = target;
    this.setState((anterior) => {
      if (anterior[id] > 1) {
        return ({
          [id]: anterior[id] - 1,
        });
      }
    });
  }

  deleteProduct({ target }) {
    const { id } = target;
    const stateLocal = this.state;

    delete stateLocal[id];

    this.setState(stateLocal);
    localStorage.removeItem(id);
>>>>>>> 5cfcd5d0636f931053fc06f92e7cba0885458be9
  }

  renderProducts() {
    const productsLocalStorage = Object.values(localStorage);
    const stateLocal = this.state;
    console.log(stateLocal);
    const products = productsLocalStorage.map((element) => JSON.parse(element));
<<<<<<< HEAD
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
=======
    const stateLocal = this.state;
    if (stateLocal !== null) {
      return (
        <div>
          { products.map((element) => {
            const { id, thumbnail, title, price } = element;
            return (
              <div key={ id }>
                <button type="button" id={ id } onClick={ this.deleteProduct }>X</button>
                <img src={ thumbnail } alt="Product" />
                <span data-testid="shopping-cart-product-name">{ title }</span>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  id={ id }
                  onClick={ this.lessProduct }
                >
                  -
                </button>
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  { stateLocal[id] }
                </span>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  id={ id }
                  onClick={ this.addProduct }
                >
                  +
                </button>
                <span>{ price }</span>
              </div>
            );
          })}
        </div>
      );
    }
>>>>>>> 5cfcd5d0636f931053fc06f92e7cba0885458be9
  }

  render() {
    if (localStorage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    if (localStorage.length > 0) {
<<<<<<< HEAD
      console.log("entrei no render");
=======
>>>>>>> 5cfcd5d0636f931053fc06f92e7cba0885458be9
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
