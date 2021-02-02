import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    const { addCart } = this.props;
    return (
      <div>
        <ShoppingCartLink />
        <ProductList addCart={ addCart } />
      </div>
    );
  }
}

Home.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Home;
