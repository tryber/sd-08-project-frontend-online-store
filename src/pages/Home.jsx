import React from 'react';
import { Header, Main } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // categoryID: '',
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
        { listProducts: resolve.length > 0 ? resolve.results : [],
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
        <Main listProducts={ listProducts } />
      </div>
    );
  }
}

export default Home;
