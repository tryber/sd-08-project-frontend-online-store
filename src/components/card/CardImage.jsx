import React from 'react';
import PropTypes from 'prop-types';
import CardFreeShipping from './CardFreeShipping';

export default function CardImage(props) {
  const { url, freeshipping } = props;
  const mystyle = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
  };
  return (
    <section className="product-card-image" style={ mystyle }>
      <CardFreeShipping show={ freeshipping } />
      {/* <img className="cart-image" src={ url } alt={ alt } /> */}
    </section>
  );
}

CardImage.propTypes = {
  url: PropTypes.string.isRequired,
  freeshipping: PropTypes.bool.isRequired,
};
