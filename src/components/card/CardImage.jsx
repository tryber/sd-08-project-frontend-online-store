import React from 'react';
import PropTypes from 'prop-types';

export default function CardImage(props) {
  const { url, alt } = props;
  return (
    <section className="product-card-image">
      <img src={ url } alt={ alt } />
    </section>
  );
}

CardImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
