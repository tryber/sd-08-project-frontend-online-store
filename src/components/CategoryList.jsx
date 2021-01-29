import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.updateState(category);
  }

  updateState(category) {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    const { onClick } = this.props;
    return (
      <div className="category-list">
        {category.map((item) => (
          <button
            type="button"
            data-testid="category"
            key={ item.id }
            id={ item.id }
            onClick={ onClick }
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
}

export default CategoryList;

CategoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
