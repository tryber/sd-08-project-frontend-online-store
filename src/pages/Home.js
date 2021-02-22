import React, { Component } from 'react';

import FilterCategories from '../components/FilterCategories';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery as getProduct } from '../services/api';
import Header from '../components/Header';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      category: '',
      query: 'mais-vendidos',
    };

    this.makeApiRequest = this.makeApiRequest.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  // componentDidMount() {
  //   console.log('montou');
  //   this.makeApiRequest();
  // }

  async makeApiRequest() {
    const { category, query } = this.state;
    const { results } = await getProduct(category, query);
    this.setState({
      items: results,
    });
  }

  updateQuery(query) {
    this.setState({
      query,
    }, () => { this.makeApiRequest(); });
  }

  updateCategory(catId) {
    this.setState({
      category: catId,
    }, () => { this.makeApiRequest(); });
  }

  render() {
    const { items } = this.state;
    return (
      <section>
        <Header handleClick={ this.updateQuery } />
        <FilterCategories handleClick={ this.updateCategory } />
        <ProductList items={ items } />
      </section>
    );
  }
}

export default Home;
