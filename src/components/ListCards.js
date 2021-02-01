import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class ListCards extends Component {
  render() {
    const { productprop } = this.props;
    const { title, price, thumbnail } = productprop;
    return (
      <section data-testid="product" className="section-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          { `R$ ${price.toFixed(2)}` }
        </p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product/${title}`,
            state: {
              product: { productprop },
            } } }
        >
          Detalhes
        </Link>
      </section>
    );
  }
}

ListCards.propTypes = {
  productprop: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ListCards;
