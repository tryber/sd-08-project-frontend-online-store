import React from 'react';
import { Link } from 'react-router-dom';
import SearchProducts from '../components/SearchProducts';

class Home extends React.Component {
  render() {
    return (
      <section className="Home">
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <SearchProducts />
        <Link to="/carrinho-compras"><img src="https://st2.depositphotos.com/3665639/7442/v/600/depositphotos_74424541-stock-illustration-pictograph-of-shopping-cart.jpg" alt="carrinho de compras" data-testid="shopping-cart-button" /></Link>
      </section>
    );
  }
}

export default Home;
