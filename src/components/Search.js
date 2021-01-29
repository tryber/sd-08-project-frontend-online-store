import React from 'react';
import * as mercadolibreAPI from '../services/api';
import ProductCard from './ProductCard';
import Loading from './Loading';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      query: [],
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  async handleButton() {
    const { searchText } = this.state;
    const { getProductsFromCategoryAndQuery } = mercadolibreAPI;
    const fetchQuery = await getProductsFromCategoryAndQuery('', searchText);
    this.setState({ query: fetchQuery.results, loading: false });
  }

  productCards(products) {
    return (
      <div>
        {products.map(
          (product) => <ProductCard key={ product.id } product={ product } />,
        )}
      </div>
    );
  }

  renderInputSearch() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          value={ searchText }
          type="search"
          name="searchText"
          id="id-search"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleButton }
          data-testid="query-button"
        >
          Pesquisar!
        </button>
      </div>
    );
  }

  render() {
    const { query, loading } = this.state;
    return (
      <div>
        {this.renderInputSearch()}
        {loading ? <Loading /> : this.productCards(query)}
      </div>
    );
  }
}

export default Search;
