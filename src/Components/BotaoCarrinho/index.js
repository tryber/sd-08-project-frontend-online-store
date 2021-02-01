import React from 'react';
import { Redirect } from 'react-router-dom';

const BotaoCarrinho = () => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  if (shouldRedirect) return <Redirect to="/cart" />;
  return (
    <button
      // className={ style.button }
      data-testid="shopping-cart-button"
      type="button"
      onClick={ () => setShouldRedirect(true) }
    >
      CARRINHO

    </button>
  );
};

export default BotaoCarrinho;
