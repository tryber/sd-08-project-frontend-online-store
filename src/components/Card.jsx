import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
