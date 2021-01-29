import React from 'react';
import PropTypes from 'prop-types';

class CardProducts extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, price, title } = product;

    return (
      <div>
        <img src={ thumbnail } alt="Thumb" />
        <p>{ title }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProducts;
