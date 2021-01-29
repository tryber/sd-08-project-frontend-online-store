import React from 'react';
import PropTypes from 'prop-types';
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

CartPage.propTypes = {
  productsOnCart: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default CartPage;
