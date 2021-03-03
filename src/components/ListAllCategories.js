import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListAllCategories extends Component {
  render() {
    const { categories, pesquisarCategoria } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <button
            data-testid="category"
            type="button"
            onClick={ () => pesquisarCategoria(category.id) }
            key={ category.id }
          >
            { category.name }
          </button>
        ))}
      </div>
    );
  }
}

ListAllCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  pesquisarCategoria: PropTypes.func.isRequired,
};
