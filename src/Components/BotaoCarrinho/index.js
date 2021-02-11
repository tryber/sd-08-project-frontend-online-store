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
        <img
          src="https://image.flaticon.com/icons/png/512/1374/1374128.png"
          alt="Carrinho de Compras"
          className="carrinhoCompras"
        />
      </button>
      <span data-testid="shopping-cart-size" className="valorCarrinho">{ cartSize.toString() }</span>
    </div>
  );
};

BotaoCarrinho.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default BotaoCarrinho;
