import React from 'react';
import CartButton from '../components/CartButton';
import SearchButton from '../components/SearchButton';
import SearchField from '../components/SearchField';
import SearchResult from '../components/SearchResult';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      categories: [],
    };
    // this.updateProductsList = this.updateProductsList.bind(this);
  }

  updateProductsList() {
    getProductsFromCategoryAndQuery(1, SearchField.name);
    this.setState({
      productsList: 'something',
    });
  }

  render() {
    return (
      <>
        <SearchField />
        <SearchButton title="Pesquisar" callback={ updateProductsList() } />
        <CartButton />
        <SearchResult />
      </>
    );
  }
}

export default Home;
