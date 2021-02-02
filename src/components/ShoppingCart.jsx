import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  getQuantity(list, item) {
    return list.find((cartItem) => cartItem.id === item.id).quantity;
  }

  negative() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </section>
    );
  }

  render() {
    const { cartList, productList, handleQuantityChange: change } = this.props;

    if (!cartList.length) { return this.negative(); }

    return (
      <section>
        <h2>Seu carrinho:</h2>
        { productList
          .filter((item) => cartList.some((cartItem) => cartItem.id === item.id))
          .map((item) => (
            <article
              key={ item.id }
              data-testid="product"
            >
              <img src={ item.thumbnail } alt="Imagem do produto" />
              <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
              <p>{ `Preço: ${item.price}` }</p>
              <p data-testid="shopping-cart-product-quantity">
                {`Qt: ${this.getQuantity(cartList, item)}.`}
              </p>
              <p>{`Qt disponível: ${item.available_quantity}`}</p>
              <div>
                <button
                  type="button"
                  onClick={ () => change('+', item.id) }
                  data-testid="product-increase-quantity"
                  disabled={ this.getQuantity(cartList, item) >= item.available_quantity }
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={ () => change('-', item.id) }
                  data-testid="product-decrease-quantity"
                  disabled={ this.getQuantity(cartList, item) <= 0 }
                >
                  -
                </button>
              </div>
            </article>
          ))}
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
        <Link to="/">Voltar</Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default ShoppingCart;
