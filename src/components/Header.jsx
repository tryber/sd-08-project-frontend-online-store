import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ButtonCart from './ButtonCart';

export default function Header(props) {
  const { showLogo, showCheckout, showBack } = props;
  const history = useHistory();

  const handleClickBack = () => {
    history.push('/');
  };

  return (
    <header>
      <div className="header-wrap">
        <section className="header-left">
          {showBack ? (
            <button
              className="header-button-back"
              type="button"
              onClick={ handleClickBack }
            >
              <img className="button-back-image" src="/icon-back.png" alt="back" />
            </button>
          ) : null}
          {showLogo ? <img className="shopping-logo" src="/logo.png" alt="logo" /> : null}
        </section>
        {showCheckout ? <ButtonCart /> : null}
      </div>
    </header>
  );
}

Header.defaultProps = {
  showLogo: true,
  showCheckout: true,
  showBack: false,
};

Header.propTypes = {
  showLogo: PropTypes.bool,
  showCheckout: PropTypes.bool,
  showBack: PropTypes.bool,
};
