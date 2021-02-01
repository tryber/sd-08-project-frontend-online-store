import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/Card.css';


class Card extends React.Component {
  render() {
    const { product: { id, title, thumbnail, price } } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/product/details/${id}` }>
        <div key={ id } data-testid="product">
          <img src={ thumbnail } alt={ title } />
          <span>{title}</span>
          <span>{`R$${price.toFixed(2)}`}</span>
        </div>
      </Link>
      <div key={ id } data-testid="product" className="item-card">
        <img
          className="card-image"
          src={ thumbnail.replace('I', 'O') }
          alt={ title }
        />
        <span className="card-title">{title}</span>
        <span className="card-price">
          {' '}
          {`R$${price}`}
        </span>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

Card.defaultProps = {
  product: {
    id: '',
    title: '',
    thumbnail: '',
    price: '',
  },
};

export default Card;
