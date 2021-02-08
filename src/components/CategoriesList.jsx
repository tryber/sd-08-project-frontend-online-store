import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <div className="category-id">
        <h3>Categorias:</h3>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <label htmlFor="category">
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  onClick={ onClick }
                  value={ category.id }
                />
                { category.name }
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
