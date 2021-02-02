import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    const cart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      cart,
    };

    this.setState(localStorage.getItem(cart));
  }

  render() {
    console.log();
    const test = localStorage.length;
    const { cart } = this.state;
    if (test === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (
      <section className="cartlist-section">
        {cart.map((cartelement) => (
          <div key={ cartelement.id } className="cartlist-itens">
            <img src={ cartelement.thumbnail } alt={ cartelement.title } />
            <p>{cartelement.title}</p>
            <p>
              R$
              {cartelement.price.toFixed(2)}
            </p>
          </div>
        ))}
      </section>);
  }
}
export default ShoppingCart;
