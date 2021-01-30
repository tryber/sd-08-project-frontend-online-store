import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [],
  //   };
  // }

  render() {
    const { categories } = this.props;
    return (
      <section className="categorySideBar">
        <h4 className="categoryTitle">Categorias</h4>
        <ul className="categoriesList">
          {categories.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              {category.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Categories;
