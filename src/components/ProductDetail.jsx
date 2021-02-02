import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCar from './ProductCar';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cartSize: 0,
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    this.setState((prevState) => ({
      cartSize: prevState.cartSize + 1,
    }));
  }

  render() {
    const { location: { state } } = this.props;
    const { cartSize } = this.state;

    return (
      <div data-testid="product-detail-name">
        <p>{ state.title }</p>
        <img src={ state.thumbnail } alt={ state.title } />
        <p>{ `R$ ${state.price.toFixed(2)}` }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProduct }
        >
          Add to Cart
        </button>
        <ProductCar cartSize={ cartSize } />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetail;
