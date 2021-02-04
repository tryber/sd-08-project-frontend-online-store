import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopButton from './ShopButton';

class LandingProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      cartProduct: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  componentDidUpdate() {
    const { location: { product: { id } } } = this.props;
    const { cartProduct } = this.state;
    localStorage.setItem(`${id}`, JSON.stringify(cartProduct));
  }

  addCart(product) {
    const { cartProduct } = this.state;
    this.setState({ cartProduct: [...cartProduct, product] });
  }

  render() {
    const { cartProduct } = this.state;
    const { location: { product } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addCart(product) }
        >
          Adicionar ao Carrinho
        </button>
        <ShopButton cartProduct={ cartProduct } />
      </div>
    );
  }
}

LandingProductDetails.propTypes = {
  location: PropTypes.shape({ product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }) }).isRequired,
};

export default LandingProductDetails;
