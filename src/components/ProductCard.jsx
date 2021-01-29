import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, imagePath, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <img src={ imagePath } alt="product" />
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
