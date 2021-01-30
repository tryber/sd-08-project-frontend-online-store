import React from 'react';

import PropTypes from 'prop-types';
import Search from './Search';
import ButtonCategory from './ButtonCategory';
import BtnShoppingCart from './BtnShoppingCart';

class Header extends React.Component {
  render() {
    const { queryProduct, handleChange, requestApi } = this.props;
    return (
      <div>
        <Search
          queryProduct={ queryProduct }
          handleChange={ handleChange }
          requestApi={ requestApi }
        />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
        <BtnShoppingCart />
        <ButtonCategory />
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
