import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  /* Essa pagina estava um bug vivo, havia uma função que vinha por props mas era modificada dentro desta pagina (não me pergunte o porque),
      A pagina apesar de receber um state tinha seu proprio state(também não me pergunte o porque disso), removi tudo e adicionei as props corretas.
  */
  render() {
    const { onCart } = this.props;
    const { addCart } = this.props;
    return (
      <div>
        <ShoppingCartLink lengthOfCart={ onCart.length } />
        <ProductList addCart={ addCart } />
      </div>
    );
  }
}

Home.propTypes = {
  onCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default Home;
