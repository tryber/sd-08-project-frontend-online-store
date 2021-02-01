import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    const { categoriesList } = this.props;
    this.state = {
      allCategories: categoriesList,
    };
  }

  render() {
    const { allCategories } = this.state;
    const { productByCategory } = this.props;
    return (
      <aside className="categories-list">
        {allCategories.map((item) => (
          <button
            type="button"
            key={ item.id }
            id={ item.id }
            data-testid="category"
            onClick={ productByCategory }
          >
            {item.name}
          </button>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  productByCategory: PropTypes.func.isRequired,
};
