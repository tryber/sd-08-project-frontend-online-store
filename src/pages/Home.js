import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    const { addCart, sumAmount } = this.props;
    return (
      <div>
        <ShoppingCartLink sumAmount={ sumAmount } />
        <ProductList addCart={ addCart } />
      </div>
    );
  }
}

Home.propTypes = {
  addCart: PropTypes.func.isRequired,
  sumAmount: PropTypes.number,
};

Home.defaultProps = {
  sumAmount: 0,
};

export default Home;
