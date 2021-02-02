import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import AddToCart from './AddToCart';

class ListCards extends Component {
  render() {
    const { productprop } = this.props;
    const { title, price, thumbnail, id } = productprop;
    return (
      <section data-testid="product" className="section-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          { `R$ ${price.toFixed(2)}` }
        </p>
        <AddToCart prop={ productprop } />
        <Link
          prop={ productprop }
          data-testid="product-detail-link"
          to={ { pathname: `/product/${id}`,
            state: {
              product: { productprop, id },
            } } }
        >
          <button type="submit">Detalhes</button>
        </Link>

      </section>
    );
  }
}

ListCards.propTypes = {
  productprop: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ListCards;
