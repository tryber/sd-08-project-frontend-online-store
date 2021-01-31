import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      onCart: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(product) {
    const { onCart } = this.state;
    this.setState({ onCart: [...onCart, product] });
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        <ShoppingCartLink onCart={ onCart } />
        <ProductList addCart={ this.addCart } />
      </div>
    );
  }
}

export default Home;
