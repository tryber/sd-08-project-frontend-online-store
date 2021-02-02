import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import FilterCategories from '../components/FilterCategories';
import ProductList from '../components/ProductList';
import QueryInput from '../components/QueryInput';
import { getProductsFromCategoryAndQuery as getProduct } from '../services/api';

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
      <>
        <header>
          <Link to="/pages/shoppingcart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <QueryInput handleClick={ this.updateQuery } />
        </header>
        <section>
          <FilterCategories handleClick={ this.updateCategory } />
          <ProductList items={ items } />
        </section>
      </>
    );
  }
}

Home.propTypes = {

};

export default Home;
