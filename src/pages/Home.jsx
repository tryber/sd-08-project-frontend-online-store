import React from 'react';
import { Header, Main, ButtonCategory } from '../components';
import '../css/Main-content.css';

import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryProduct: '',
      listProducts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.requestApi = this.requestApi.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  requestApi() {
    const { queryProduct } = this.state;
    api.getProductsFromCategoryAndQuery('', queryProduct)
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
          <ButtonCategory />
          <Main listProducts={ listProducts } />
        </div>
      </div>
    );
  }
}

export default Home;
