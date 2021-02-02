import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCar from './ProductCar';
import ProductCard from './ProductCard';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productsCard: [],
      productsCar: [],
    };

    this.handleAddToCard = this.handleAddToCard.bind(this);
  }

  handleAddToCard(object) {
    const { productsCar } = this.state;
    this.setState({ productsCar: [...productsCar, object] });
  }

  render() {
    const { location: { state } } = this.props;
    const { productsCar, productsCard } = this.state;

    return (
      <div data-testid="product-detail-name">
        <p>{ state.title }</p>
        <img src={ state.thumbnail } alt={ state.title } />
        <p>{ `R$ ${state.price.toFixed(2)}` }</p>
        <ProductCard productsCard={ productsCard } addToCar={ this.handleAddToCard } />
        <ProductCar cartSize={ productsCar.length } productsCar={ productsCar } />
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
