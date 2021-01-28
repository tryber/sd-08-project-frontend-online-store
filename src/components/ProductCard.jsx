import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price /* available_quantity */ } = product;
    return (
      <section>
        <div>
          <h2>{title}</h2>
          <h3>{id}</h3>
          <img src={ thumbnail } alt={ title } />
          <h4>{price}</h4>
          {/* <h5>{available_quantity}</h5> */}
        </div>
        <div><Link to={ `/products/${id}` }>VER DETALHES</Link></div>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};
