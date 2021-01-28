import React from 'react';
import CartIcon from './CartIcon';
import Search from './Search';

class ListagemDeProdutos extends React.Component {
  render() {
    return (
      <section>
        <Search />
        <CartIcon />
      </section>
    );
  }
}

export default ListagemDeProdutos;
