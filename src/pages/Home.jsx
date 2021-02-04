import React from 'react';
import PropTypes from 'prop-types';
import CategoriesNavigator from '../components/Home/CategoriesNavigator';
import InitialMessage from '../components/Home/InitialMessage';
import LinkToShoppingCart from '../components/LinkShoppingCart';

function Home({ categories }) {
  return (
    <div>
      <LinkToShoppingCart />
      <InitialMessage />
      <CategoriesNavigator categories={ categories } />
    </div>
  );
}

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  // handleInputRadio: PropTypes.func.isRequired,
}.isRequired;

export default Home;
