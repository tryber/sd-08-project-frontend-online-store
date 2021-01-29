import React from 'react';
import CartButton from '../components/CartButton';
import SearchButton from '../components/SearchButton';
import SearchField from '../components/SearchField';
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
    const { searchField } = this.state;
    this.setState({
      searchField: event.target.value,
    });
  }

  handleInputSubmit(event) {
    event.preventDefault();
    const { searchField } = this.state;
    const result = async () => {
      await getProductsFromCategoryAndQuery(searchField);
    };
    console.log(result);
  }

  async getCategoriesList() {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <SearchForm
          submitCallback={ this.handleInputSubmit }
          handleInputChange={ this.handleInputChange }
        />
        <CartButton />
        <Categories categories={ categories } />
        <SearchResult />
      </>
    );
  }
}

export default Home;
