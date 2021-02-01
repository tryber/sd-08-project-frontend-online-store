import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {
  render() {
    const { title, img, price, id } = this.props;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img alt="" src={ img } />
        <p>{price}</p>
        <Link data-testid="product-detail-link" to={ `/details/${id}` }>DETAILS</Link>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
