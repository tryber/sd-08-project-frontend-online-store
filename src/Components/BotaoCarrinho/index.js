import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const BotaoCarrinho = (props) => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  const { cartSize } = props;
  if (shouldRedirect) return <Redirect to="/cart" />;
  return (
    <div>
      <button
        data-testid="shopping-cart-button"
        type="button"
        onClick={ () => setShouldRedirect(true) }
      >
        CARRINHO

      </button>
      <span data-testid="shopping-cart-size">{ cartSize.toString() }</span>
    </div>
  );
};

BotaoCarrinho.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default BotaoCarrinho;
