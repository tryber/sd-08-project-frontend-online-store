import React from 'react';
import PropTypes from 'prop-types';
import * as mercadolibreAPI from '../services/api';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.fetchQuery = this.fetchQuery.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchQuery({ target }) {
    const { value, name } = target;
    const { getProductsFromCategoryAndQuery } = mercadolibreAPI;
    const { onClick } = this.props;
    const query = value.replace(/\s/ig, '+');
    const fetchQuery = await getProductsFromCategoryAndQuery(query, name);
    onClick(fetchQuery.results);
  }

  async fetchCategories() {
    const { getCategories } = mercadolibreAPI;
    const fetchCategories = await getCategories();
    this.setState((state) => ({
      ...state, categories: fetchCategories,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((cat) => (
          <input
            type="button"
            data-testid="category"
            key={ cat.name }
            onClick={ this.fetchQuery }
            value={ cat.name }
            name={ cat.id }
          />
        ))}
      </div>
    );
  }
}

ListCategories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListCategories;
