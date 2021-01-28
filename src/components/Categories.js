import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories, onChange } = this.props;
    return (
      <select name="selected-category" onChange={ onChange }>
        { categories.map(({ name, id }) => (
          <option
            key={ id }
            value={ id }
            data-testid="category"
          >
            { name }
          </option>)) }
      </select>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Categories;
