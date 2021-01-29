import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories, onChange } = this.props;
    return (
      <div>
        { categories.map(({ name, id }) => (
          <button
            type="button"
            value={ id }
            data-testid="category"
            key={ id }
          >
            { name }
          </button>)) }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Categories;
