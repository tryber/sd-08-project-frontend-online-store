import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cart-icon.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p>Você ainda não realizou uma busca</p>
        <Link to="/cartcheckout" data-testid="shopping-cart-button">
          <img src={ cartIcon } alt="cart icon" />
        </Link>
      </div>
    );
  }
}

export default Home;
