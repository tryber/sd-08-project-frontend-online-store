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
    };

    this.makeApiRequest = this.makeApiRequest.bind(this);
  }

  componentDidMount() {
    this.makeApiRequest('mais-vendidos');
  }

  async makeApiRequest(query) {
    const { results } = await getProduct('', query);
    this.setState({
      items: results,
    });
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
          <QueryInput handleClick={ this.makeApiRequest } />
        </header>
        <section>
          <FilterCategories />
          <ProductList items={ items } />
        </section>
      </>
    );
  }
}

Home.propTypes = {

};

export default Home;
