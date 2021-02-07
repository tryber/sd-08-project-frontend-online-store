import React, { Component } from 'react';
import ButtonCart from '../components/ButtonCart';
import Header from '../components/Header';
import SearchPage from './SearchPage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itensOnCart: 0,
    };
    this.updateItensOnCart = this.updateItensOnCart.bind(this);
  }

  componentDidMount() {
    this.updateItensOnCart();
  }

  updateItensOnCart() {
    let itensOnCart = 0;
    if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
      itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
    }
    this.setState({ itensOnCart });
  }

  render() {
    const { itensOnCart } = this.state;
    return (
      <div>
        <Header />
        <ButtonCart itensOnCart={ itensOnCart } />
        <SearchPage updateItensOnCart={ this.updateItensOnCart } />
      </div>
    );
  }
}

export default Home;
