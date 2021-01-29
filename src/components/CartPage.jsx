import React from 'react';
import CardProducts from './CardProducts';

class CartPage extends React.Component {
  render() {
    const { productsOnCart } = this.props;

    if (productsOnCart.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        { productsOnCart.map((product) => (<CardProducts
          key={ product.id }
          product={ product }
        />))}
      </div>

    );
  }
}

export default CartPage;
