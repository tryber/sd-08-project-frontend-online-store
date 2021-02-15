import React from 'react';
import PropTypes from 'prop-types';

class Shoplist extends React.Component {
  render() {
    const { carrinho } = this.props;
    if (carrinho.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <span data-testid="shopping-cart-product-quantity">
          Items no Carrinho:
          {carrinho.length}
        </span>
        <ul>
          {carrinho.map((item) => (
            <li key={ item.id } data-testid="shopping-cart-product-name">
              {item.title}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

Shoplist.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shoplist;
