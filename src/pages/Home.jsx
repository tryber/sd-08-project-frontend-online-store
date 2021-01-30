import React from 'react';
import CartButton from '../components/CartButton';
import SearchResult from '../components/SearchResult';
import Categories from '../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchForm from '../components/SearchForm';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      productsList: [],
      categories: [],
    };
    // this.updateProductsList = this.updateProductsList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }
  // updateProductsList() {
  //   getProductsFromCategoryAndQuery(1, SearchField.name);
  //   this.setState({
  //     productsList: 'something',
  //   });
  // }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleInputChange(event) {
    this.setState({
      searchField: event.target.value,
    });
  }

  async handleInputSubmit(event) {
    event.preventDefault();
    const { searchField } = this.state;
    const response = await getProductsFromCategoryAndQuery(undefined, searchField);
    this.setState({
      productsList: response.results,
    });
  }

  async getCategoriesList() {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  render() {
    const { categories, productsList } = this.state;
    return (
      <>
        <SearchForm
          submitCallback={ this.handleInputSubmit }
          handleInputChange={ this.handleInputChange }
        />
        <CartButton />
        <Categories categories={ categories } />
        <SearchResult productsList={ productsList } />
      </>
    );
  }
}

export default Home;
