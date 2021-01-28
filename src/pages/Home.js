import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <QueryInput handleClick={ this.makeApiRequest } />
        <ProductList items={ items } />
      </section>
    );
  }
}

Home.propTypes = {

};

export default Home;
