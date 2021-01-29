import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/pages/shoppingcart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
        </header>
        <section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </>
    );
  }
}

Home.propTypes = {

};

export default Home;
