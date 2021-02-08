import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onSelectedCategorie } = this.props;

    return (
      <div>
        <ul>
          {categories.map((category) => (
            <button
              key={ category.id }
              type="button"
              onClick={ (event) => { onSelectedCategorie(event); } }
              value={ category }
              id={ category.id }
              data-testid="category"
            >
              {category.name}
            </button>
          ))}
        </ul>
      </div>);
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onSelectedCategorie: PropTypes.func.isRequired,
};

export default Categories;
