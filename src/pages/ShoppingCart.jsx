import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

    const isEmpty = (selectedProducts.length === 0);
    this.increaseItem = this.increaseItem.bind(this);
    // this.decreaseItem = this.decreaseItem.bind(this);
    this.state = {
      selectedProducts,
      isEmpty,
    };
  }

  increaseItem(item) {
    const { selectedProducts } = this.state;
    const items = JSON.parse(localStorage.getItem('selectedProducts'));
    const productFound = items
      .findIndex((product) => product.title === item.title);
    if (productFound >= 0) {
      selectedProducts[productFound].quantity += 1;
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    this.setState({ selectedProducts });
  }

  decreaseItem(item) {
    const { selectedProducts } = this.state;
    const items = JSON.parse(localStorage.getItem('selectedProducts'));
    const productFound = items
      .findIndex((product) => product.title === item.title);
    if (productFound >= 0 && item.quantity > 0) {
      selectedProducts[productFound].quantity += -1;
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    this.setState({ selectedProducts });
  }

  render() {
    const { selectedProducts, isEmpty } = this.state;
    if (isEmpty) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    } return (
      <div>
        {selectedProducts.map((product) => (
          <div key={ product.title }>
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <p>{product.price}</p>
            <img src={ product.imagePath } alt="product" />
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              {product.quantity}
            </p>
            <button
              type="submit"
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseItem(product) }
            >
              +
            </button>
            <button
              type="submit"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseItem(product) }
            >
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
