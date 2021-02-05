import React from 'react';
import PropTypes from 'prop-types';

export default function DetailImage(props) {
  const { url, freeshipping } = props;
  const mystyle = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };
  return (
    <section className="detail-image" style={ mystyle }>
      {freeshipping ? (
        <img
          className="free-shipping"
          src="/free-shipping.png"
          alt="free-shipping"
          data-testid="free-shipping"
        />
      ) : null}
      {/* <img className="cart-image" src={ url } alt={ alt } /> */}
    </section>
  );
}

DetailImage.propTypes = {
  url: PropTypes.string.isRequired,
  freeshipping: PropTypes.bool.isRequired,
};
