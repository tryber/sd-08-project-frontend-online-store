import React from 'react';
import PropTypes from 'prop-types';
import CardFreeShipping from './CardFreeShipping';

export default function CardImage(props) {
  const { url, alt, freeshipping } = props;
  return (
    <section className="product-card-image">
      {/* <CardFreeShipping show={ freeshipping } /> */}
      <img className="cart-image" src={ url } alt={ alt } />
    </section>
  );
}

CardImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  freeshipping: PropTypes.bool.isRequired,
};
