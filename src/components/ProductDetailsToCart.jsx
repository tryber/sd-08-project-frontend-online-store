import React from 'react';
import { getCartFromLocalStorage,
  saveCartInLocalStorage } from '../services/localStorageServices';

class ProductDetailsToCart extends React.Component {
  addToCart(id, title) {
    const currentCart = getCartFromLocalStorage();
    console.log(currentCart);
    const updatedCart = currentCart.push({ id, title, amount: '1' });
    saveCartInLocalStorage(JSON.stringify(updatedCart));
  }

  render() {
    // const { id, title, price, thumbnail, addToCard } = this.props;
    const { id, title } = this.props;
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => addToCart(id, title) }
      >
        Adicinar ao carrinho!

      </button>
    );
  }
}

export default ProductDetailsToCart;

/*

**Desenvolva algo da forma simples: um elemento adiciona um produto.

2- Adicione o atributo data-testid com o valor shopping-cart-product-name
no elemento que possui o nome do produto na tela do carrinho de compras.
Você deve adicionar esse atributo para todos os produtos.

3- Adicione o atributo data-testid com o valor shopping-cart-product-quantity
no elemento que possui a quantidade do produto na tela do carrinho de compras.
Você deve adicionar esse atributo para todos os produtos.
*/
