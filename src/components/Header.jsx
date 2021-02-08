import React from 'react';

import PropTypes from 'prop-types';
import Search from './Search';
import BtnShoppingCart from './BtnShoppingCart';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { queryProduct, handleChange, requestApi } = this.props;
    return (
      <div>
        <div className="banner">
          <h1>Loja 28</h1>
          <Search
            queryProduct={ queryProduct }
            handleChange={ handleChange }
            requestApi={ requestApi }
          />
          <div className="cartItems">
            <BtnShoppingCart />
          </div>
        </div>
        <h1 className="searchDescription" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
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
