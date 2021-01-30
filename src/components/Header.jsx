import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
  const { showLogo, showCheckout, showBack } = props;
  const history = useHistory();
  const [count, setCount] = useState(0);

  const handleClickCart = () => {
    console.log('cart');
    history.push('/cart');
  };

  const checkoutCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    checkoutCounter();
  });

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
              <img className="button-back-image" src="icon-back.png" alt="back" />
            </button>
          ) : null}
          {showLogo ? <img className="shopping-logo" src="logo.png" alt="logo" /> : null}
        </section>
        {showCheckout ? (
          <button type="button" className="cart-button" onClick={ handleClickCart }>
            <img className="cart-image" src="icon-cart.png" alt="cart" />
            <span className="cart-count">{count}</span>
          </button>
        ) : null}
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
