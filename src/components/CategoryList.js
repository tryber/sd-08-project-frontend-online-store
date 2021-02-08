import React from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categories: result,
      });
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <aside>
        <ul>
          {
            categories.map((category) => (
              <button
                key={ category.id }
                id={ category.id }
                name="categoryId"
                type="button"
                data-testid="category"
                onClick={ onClick }
              >
                { category.name }
              </button>))
          }
        </ul>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoryList;
