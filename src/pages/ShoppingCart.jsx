import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

    const isEmpty = (selectedProducts.length === 0);
    this.state = {
      selectedProducts,
      isEmpty,
    };
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
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
