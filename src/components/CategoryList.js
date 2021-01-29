import React from 'react';
import PropTypes from 'prop-types';

import './categoryList.css';

class CategoryList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((category) => (
          <li
            data-testid="category"
            key={ category.id }
            to={ `/${category.id}` }
          >
            { category.name }
          </li>
        ))}
      </ul>
    );
  }
}

CategoryList.propTypes = {
  list: PropTypes.arrayOf(String).isRequired,
};

export default CategoryList;
