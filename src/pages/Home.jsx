import React from 'react';
import { Header, Main } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProduct: '',
      category: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.requestApi = this.requestApi.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.requestApi(event);
  }

  requestApi({ target }) {
    this.setState({ [target.name]: target.value },
      async () => {
        const { category, nameProduct } = this.state;
        this.setState({
          products: await api.getProductsFromCategoryAndQuery(category, nameProduct),
        });
      });
  }

  render() {
    const { nameProduct, products } = this.state;
    return (
      <>
        <Header
          value={ nameProduct }
          onQueryProduct={ this.handleChange }
          onClickRequest={ this.requestApi }
        />
        <Main itemsProducts={ products } />
      </>
    );
  }
}

export default Home;
