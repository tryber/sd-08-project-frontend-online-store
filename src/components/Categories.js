import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <select>
        { categories.map(({ name, id }) => (
          <option data-testid="category" key={ id }>{ name }</option>)) }
      </select>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
