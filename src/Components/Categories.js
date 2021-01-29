import React from 'react';
import PropTypes from 'prop-types';
/* import { Link } from 'react-router-dom'; */
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: undefined,
      categoryId: '',
      products: undefined,
    };

    this.showCategories = this.showCategories.bind(this);

    this.fetchSearchApi = this.fetchSearchApi.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  async fetchSearchApi() {
    const { categoryId, query } = this.state;
    const busca = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: busca.results });
  }

  showCategories() {
    const { categories } = this.props;
    return categories.map((elem) => (
      <button
        type="button"
        key={ elem.id }
        data-testid="category"
        onClick={ async () => {
          await this.setState({ categoryId: elem.id });
          await this.fetchSearchApi();
        } }

      >
        { elem.name }
      </button>));
  }

  renderSearchResults() {
    const { products } = this.state;
    if (products === undefined) { return <div />; }

    return (
      products.map((product) => (
        <div key={ product.id } data-testid="product">
          <p>{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>
            R$:
            { product.price }
          </p>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        { this.showCategories() }
        { this.renderSearchResults() }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Categories;
