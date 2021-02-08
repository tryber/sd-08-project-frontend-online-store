import React from 'react';
import { Header, Main, ButtonCategory } from '../components';
import { localStorageSave, localStorageLoad } from '../localStorage';
import '../css/Main-content.css';

import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: '',
      queryProduct: '',
      listProducts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.requestApi = this.requestApi.bind(this);
    this.handleChangeClickBuyProduct = this.handleChangeClickBuyProduct.bind(this);
  }

  componentDidUpdate(previousProp, previousState) {
    const { categoryID } = this.state;
    if (previousState.categoryID !== categoryID) {
      this.requestApi();
    }
  }

  handleChangeClickBuyProduct({ target }) {
    const { listProducts } = this.state;
    let localStorageProduct = localStorageLoad('shoppingCart');
    const product = listProducts.find((el) => el.id === target.id);
    if (!localStorageProduct) {
      localStorageProduct = [];
    }
    if (localStorageProduct.length === 0
      || localStorageProduct.every((el) => el.id !== target.id)) {
      localStorageSave('shoppingCart', product, target.id);
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  requestApi() {
    const { queryProduct, categoryID } = this.state;
    api.getProductsFromCategoryAndQuery(categoryID, queryProduct)
      .then((resolve) => this.setState(
        { listProducts: resolve.results.length > 0 ? resolve.results : [],
          queryProduct: '' },
      ));
  }

  render() {
    const { queryProduct, listProducts } = this.state;
    return (
      <div>
        <Header
          queryProduct={ queryProduct }
          handleChange={ this.handleChange }
          requestApi={ this.requestApi }
        />
        <div className="main-content">
          <ButtonCategory handleChange={ this.handleChange } />
          <Main
            listProducts={ listProducts }
            handleChangeClickBuyProduct={ this.handleChangeClickBuyProduct }
          />
        </div>
      </div>
    );
  }
}

export default Home;
