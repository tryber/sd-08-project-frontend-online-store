import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shoppingCartIcon.png';

class ProductsDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      amount: 1,
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(queryResult) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, queryResult],
    });
  }

  render() {
    const { cart, amount } = this.state;
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart/', cart, amount } }
          data-testid="shopping-cart-button"
        >
          <img src={ shoppingCartIcon } alt="shopping-cart" className="shopping-cart" />
        </Link>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="Product Pic" />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addProduct(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired }).isRequired,
  }).isRequired,

};

export default ProductsDetails;
