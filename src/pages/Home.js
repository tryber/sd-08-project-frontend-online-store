import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartLink />
        <ProductList />
      </div>
    );
  }
}

export default Home;
