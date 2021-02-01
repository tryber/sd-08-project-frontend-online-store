import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { name, imagePath, price } = this.props;
    return (
      <section>
        <p>{name}</p>
        <div><img src={ imagePath } alt="produto" /></div>
        <p>{price}</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
