import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked({ target }) {
    const { clickCategory } = this.props;
    const { id } = target;
    clickCategory(id);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        {
          categories.map((category) => (
            <button
              data-testid="category"
              key={ category.id }
              type="button"
              onClick={ this.clicked }
              id={ category.id }
            >
              {category.name}
            </button>
          ))
        }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
  clickCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
