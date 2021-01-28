import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cart-icon.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </p>
        <Link to="/cartcheckout" data-testid="shopping-cart-button">
          <img src={ cartIcon } alt="cart icon" />
        </Link>
      </div>
    );
  }
}

export default Home;
