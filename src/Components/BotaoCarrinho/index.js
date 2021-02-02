import React from 'react';
import { Redirect } from 'react-router-dom';

const BotaoCarrinho = () => {
  const [ shouldRedirect, setShouldRedirect ] = React.useState(false);
  // let quantity = 0;

  // useEffect(() => {
  //   const localStorageProducts = JSON.parse(localStorage.getItem('PRODUTOS'));
  //   if (localStorageProducts) {
  //     quantity = localStorageProducts
  //       .reduce((accumulator, product) => {
  //         return accumulator + parseInt(product.quantity, 10);
  //       }, 0);
  //   }
  // });

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
      {/* <span data-testid="shopping-cart-size">{ quantity.toString() }</span> */}
    </div>
  );
};

export default BotaoCarrinho;
