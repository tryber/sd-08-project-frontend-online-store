import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import SearchResult from '../components/SearchResult';
// import CartButton from '../components/CartButton';
// import SearchResult from '../components/SearchResult';
// import Categories from '../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchForm from '../components/SearchForm';
// import MainContent from './MainContent';
// import InitialMessage from '../components/InitialMessage';
// import MainContent from './MainContent';

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
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleInputChange(event) {
    this.setState({
      searchField: event.target.value,
    });
  }

  handleAddItemToCart(event) {
    const { cartItems, productsList } = this.state;
    cartItems.push(productsList.find((item) => item.id === event.target.value));
    console.log(cartItems);
    this.setState({
      cartItems,
      // .push(productsList.find((item) => item.id === event.target.value)),
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
        {/* {
          productsList.length < 1
            ? <InitialMessage />
            : <MainContent
              submitCallback={ this.handleInputSubmit }
              handleInputChange={ this.handleInputChange }
              categories={ categories }
              handleInputRadio={ this.handleInputRadio }
              productsList={ productsList }
            />
        } */}
        {/* <MainContent
          submitCallback={ this.handleInputSubmit }
          handleInputChange={ this.handleInputChange }
          categories={ categories }
          handleInputRadio={ this.handleInputRadio }
          productsList={ productsList }
        /> */}
      </>
    );
  }
}

export default Home;
