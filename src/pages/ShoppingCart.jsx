import React from 'react';
import { localStorageLoad } from '../localStorage';

class ShoppingCart extends React.Component {
  reduceObject() {
    const products = localStorageLoad('shoppingCart');
    if (!products) {
      return null;
    }
    const result = products.reduce((current, value) => {
      value.prod.amount = value.amount;
      current = [...current, value.prod];
      return current;
    }, []);
    return result;
  }

  render() {
    const products = this.reduceObject();
    if (!products) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <section style={ { display: 'flex' } }>
        {products.map((el, index) => (
          <div key={ index }>
            <div>
              <img
                src={ el.thumbnail }
                style={ { width: '100px' } }
                alt={ el.title }
              />
            </div>
            <div>
              <span data-testid="shopping-cart-product-name">{el.title}</span>
            </div>
            <div>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {el.amount}
              </span>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default ShoppingCart;
