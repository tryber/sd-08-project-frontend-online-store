import React from 'react';

import PropTypes from 'prop-types';
import Search from './Search';
import ButtonCategory from './ButtonCategory';
import BtnShoppingCart from './BtnShoppingCart';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { queryProduct, handleChange, requestApi } = this.props;
    return (
      <div>
        <div className="banner">
          <div className="logo">
            <h1>Pantanal</h1>
          </div>
        </div>
        <div className="search">
          <Search
            queryProduct={ queryProduct }
            handleChange={ handleChange }
            requestApi={ requestApi }
          />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma
            categoria.
          </h1>
        </div>

        <div className="cartItems">
          <BtnShoppingCart />
          <ButtonCategory />
        </div>

      </div>

    );
  }
}

Header.propTypes = {
  queryProduct: PropTypes.string,
  handleChange: PropTypes.func,
  requestApi: PropTypes.func,
};

Header.defaultProps = {
  queryProduct: '',
  handleChange: () => {},
  requestApi: () => {},
};

export default Header;
