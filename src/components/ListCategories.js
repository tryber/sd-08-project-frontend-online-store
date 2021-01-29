import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <aside className="category-id">
        <h3>Categorias:</h3>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <label htmlFor="category">
                <input
                  data-testid="category"
                  type="radio"
                />
                { category.name }
              </label>
            </div>
          ))
        }
      </aside>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
