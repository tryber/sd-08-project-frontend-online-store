import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ProductItem.css';
import AddProduct from './AddProduct';

class ProductItem extends Component {
  isFreeShipping() {
    const { item: { shipping: { free_shipping: free } } } = this.props;
    return free ? (
      <p className="free-shipping">
        FRETE GRÁTIS
      </p>) : null;
  }

  availableQuantity() {
    const { item: { available_quantity: availableQuantity } } = this.props;
    return (
      <p>{availableQuantity}</p>
    );
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail, price, id } = item;
    return (
      <section className="product" data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <p className="product-price">{ `R$ ${price.toFixed(2)}` }</p>
        { this.isFreeShipping() }
        <p className="product-title">{title}</p>
        <div>
          Qntd.
          {' '}
          { this.availableQuantity() }
        </div>
        <Link
          to={ `/details/${id}` }
          data-testid="product-detail-link"
        >
          Ver detalhes...
        </Link>
        <AddProduct item={ item } testid="product-add-to-cart" />
      </section>
    );
  }
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
