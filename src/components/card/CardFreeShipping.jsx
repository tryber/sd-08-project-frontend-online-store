import React from 'react';
import PropTypes from 'prop-types';

export default function CardFreeShipping(props) {
  const { show } = props;
  return (
    <>
      {show ? (
        <img className="free-shipping" src="/free-shipping.png" alt="free-shipping" />
      ) : null}
      <div />
    </>
  );
}

CardFreeShipping.propTypes = {
  show: PropTypes.bool.isRequired,
};
