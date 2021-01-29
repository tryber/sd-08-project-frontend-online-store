import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.showCategories = this.showCategories.bind(this);
  }

  showCategories() {
    const { categories } = this.props;
    return categories.map((elem) => (
      <li key={ elem.id } data-testid="category">
        { elem.name }
      </li>));
  }

  render() {
    return (
      <div>
        { this.showCategories() }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Categories;
