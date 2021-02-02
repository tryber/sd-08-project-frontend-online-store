import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };

    this.GetApiCategories = this.GetApiCategories.bind(this);
  }

  componentDidMount() {
    this.GetApiCategories();
  }

  async GetApiCategories() {
    const categoriesArray = await getCategories();
    this.setState({ categoriesList: categoriesArray });
  }

  render() {
    const { categoriesList } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        {categoriesList.map(({ name, id }) => (
          <button
            key={ id }
            type="button"
            data-testid="category"
            onClick={ () => onClick(id) }
          >
            { name }
          </button>))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
