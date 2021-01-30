import React from 'react';
import * as api from '../services/api';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ListCategories from '../components/ListCategories';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategories: [],
    };

    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    this.setState(async () => {
      const categoryArray = await api.getCategories();
      this.setState({ listCategories: categoryArray });
    });
  }

  render() {
    const { listCategories } = this.state;
    return (
      <div>
        <ShoppingCartLink />
        <ListCategories categories={ listCategories } />
        <ProductList />
      </div>
    );
  }
}

export default Home;
