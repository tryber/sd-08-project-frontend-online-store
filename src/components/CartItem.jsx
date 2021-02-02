import React from 'react';

class CartItem extends React.Component {
  render() {
    const { id, title, amount } = this.props;
    return (
      <section>

        <p data-testid="shopping-cart-product-name">
          { title }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          { amount }
        </p>

      </section>
    );
  }
}
export default CartItem;

/*
Adicione o atributo data-testid com o valor shopping-cart-product-name
no elemento que possui o nome do produto na tela do carrinho de compras.
Você deve adicionar esse atributo para todos os produtos.

Adicione o atributo data-testid com o valor shopping-cart-product-quantity
no elemento que possui a quantidade do produto na tela do carrinho de compras.
Você deve adicionar esse atributo para todos os produtos. */
