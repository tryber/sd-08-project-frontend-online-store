import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCar from './ProductCar';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      products: [],
    };

    this.addToCar = this.addToCar.bind(this);
    this.carregarLocation = this.carregarLocation.bind(this);
  }

  componentDidMount() {
    this.carregarLocation();
  }

  carregarLocation() {
    const { location: { state: { product, products } } } = this.props;

    this.setState({ product });
    this.setState({ products });
  }

  addToCar(object) {
    const { products } = this.state;
    this.setState({ products: [...products, object] });
  }

  render() {
    const { product, products } = this.state;

    return (
      <div data-testid="product-detail-name">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <ProductCar cartSize={ products.length } productsCar={ products } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCar(product) }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
      products: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetail;
