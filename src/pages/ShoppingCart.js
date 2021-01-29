import React from 'react';

class ShoppingCart extends React.Component {
  // renderCartList = () => {
  //   função que irá renderizar a lista no carrinho de compras
  // }
  render() {
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          <div>Seu carrinho está vazio</div>
          {/* Aqui futuramente poderá ser feito um renderização condicional
            {(cartList.length === nulo)
              ? <div>Seu carrinho está vazio</div>
              : this.renderCartList()} */}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
