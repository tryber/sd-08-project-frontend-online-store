import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {
          categories.map((category) => (
            <li data-testid="category" key={ category.id }>
              { category.name }
            </li>
          ))
        }
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
};

export default CategoriesList;
