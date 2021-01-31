import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const arrayOfProducts = Object.keys(localStorage);
    if (localStorage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <div>
        { arrayOfProducts.map((product) => (
          <div key={ product.split(',')[0] }>
            <div>{ product.split(',')[1] }</div>
            <img src={ product.split(',')[2] } alt="thumbnail" />
            <div>{ product.split(',')[3] }</div>
          </div>
        ))}
      </div>
    )
  }
}

export default ShoppingCart;
