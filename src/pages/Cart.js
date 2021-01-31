import React from 'react';

class emptyCar extends React.Component {
  render() {
    const { location: { state: { productCart } } } = this.props;
    return (
      <div>
        {productCart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : productCart.map((cart) => (
            <div key={ cart.title }>
              <p data-testid="shopping-cart-product-name">{cart.title}</p>
              <img src={ cart.thumbnail } alt={ cart.title } />
              <p>{`R$${cart.price}`}</p>
            </div>))}
      </div>
    );
  }
}

export default emptyCar;
