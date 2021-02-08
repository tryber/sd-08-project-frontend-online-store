import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartPage extends React.Component {
  constructor() {
    super();
    this.titleSearch = this.titleSearch.bind(this);
  }

  titleSearch() {
    if (this.state === null) {
      return (
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      );
    }
  }

  render() {
    const { location: { state: { cart } } } = this.props;
    return (
      <section>
        <Link to="/">Home</Link>
        <this.titleSearch />
        { cart.map((res) => (
          <div key={ res.id }>
            <h4>{res.id}</h4>
            <h4 data-testid="shopping-cart-product-name">{res.title}</h4>
            <h4 data-testid="shopping-cart-product-quantity">{res.quantity}</h4>
          </div>
        ))}
      </section>
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.shape(
        {
          id: PropTypes.string,
          title: PropTypes.string,
          quantity: PropTypes.number,
        },
      )),
    }),
  }).isRequired,
};

export default CartPage;
