import React from 'react';
import PropTypes from 'prop-types';

function CategoriesNavigator({ categories }) {
  console.log(categories);
  return (
    <nav className="category-navigator">
      <h3 className="category-header">Categorias</h3>
      <ul className="categories-list">
        {categories.map((category) => (
          <li key={ category.id }>
            <label htmlFor={ category.name }>
              <input
                id={ category.id }
                type="radio"
                data-testid="category"
                // key={ category.id }
                value={ category.id }
                name="categories-radio-button"
                // onChange={ handleInputRadio }
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
}

CategoriesNavigator.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  // handleInputRadio: PropTypes.func.isRequired,
}.isRequired;

export default CategoriesNavigator;
