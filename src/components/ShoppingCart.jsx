import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cartList, productList } = this.props;

    if (!cartList.length) {
      return (
        <section>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </section>
      );
    }

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
              <p>{ item.price }</p>
              <p data-testid="shopping-cart-product-quantity">
                {cartList.find((cartItem) => cartItem.id === item.id).quantity}
              </p>
            </article>
          ))}
        <Link to="/">Voltar</Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
