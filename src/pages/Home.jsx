import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import SearchResult from '../components/SearchResult';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchForm from '../components/SearchForm';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      productsList: [],
      categories: [],
      radioValue: '',
      cartItems: [],
      // productDetail: [],
      // showCart: false,
      // isLoading: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputRadio = this.handleInputRadio.bind(this);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
    this.getLocalStorage();
  }

  componentWillUnmount() {
    this.setLocalStorageState();
  }

  handleInputChange(event) {
    this.setState({
      searchField: event.target.value,
    });
  }

  async handleInputSubmit(event) {
    event.preventDefault();
    const { searchField, radioValue } = this.state;
    if (searchField || radioValue) {
      const response = await getProductsFromCategoryAndQuery(radioValue, searchField);
      this.setState({
        productsList: response.results,
      });
    }
  }

  async handleInputRadio(event) {
    this.setState({
      radioValue: await event.target.value,
    });
    await this.getQueryList();
  }

  handleAddItemToCart(event) {
    const { cartItems, productsList } = this.state;
    cartItems.push(productsList.find((item) => item.id === event.target.value));
    console.log(cartItems);
    this.setState({
      cartItems,
    });
  }

  async getQueryList() {
    const { radioValue } = this.state;
    const response = await getProductsFromCategoryAndQuery(radioValue);
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

  setLocalStorageState() {
    const myState = JSON.stringify(this.state);
    console.log(myState);
    localStorage.setItem('myState', myState);
  }

  getLocalStorage() {
    const myState = JSON.parse(localStorage.getItem('myState'));
    this.setState(myState);
  }

  render() {
    const { categories, productsList, cartItems } = this.state;
    return (
      <>
        <SearchForm
          submitCallback={ this.handleInputSubmit }
          handleInputChange={ this.handleInputChange }
        />
        <CartButton cartItems={ cartItems } />
        <Categories
          categories={ categories }
          handleInputRadio={ this.handleInputRadio }
        />
        <SearchResult
          productsList={ productsList }
          handleAddItemToCart={ this.handleAddItemToCart }
        />
      </>
    );
  }
}

export default Home;
