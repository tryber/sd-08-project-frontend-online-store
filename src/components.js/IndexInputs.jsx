import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cart-icon.png';

class IndexInputs extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <>
        <input id="inputText" type="text" />
        <Link to="/cartcheckout" data-testid="shopping-cart-button">
          <img src={ cartIcon } alt="cart icon" className="cartIcon" />
        </Link>
        <p htmlFor="inputText" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            onChange={ handleChange }
            name="value"
            data-testid="query-input"
          />
          <button type="button" data-testid="query-button" onClick={ handleClick }>
            Pesquisar
          </button>
        </p>
      </>
    );
  }
}

export default IndexInputs;
