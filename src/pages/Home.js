import React from 'react';
import ProductList from '../components/ProductList';
import ShoppingCartLink from '../components/ShoppingCartLink';

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
