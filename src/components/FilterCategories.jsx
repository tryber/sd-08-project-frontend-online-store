import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class FilterCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.categoriesList = this.categoriesList.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.categoriesList();
  }

  onClick({ target: { value } }) {
    const { handleClick } = this.props;
    handleClick(value);
  }

  async categoriesList() {
    const cat = await getCategories();
    const list = cat.map((data) => (
      <button
        type="button"
        key={ data.id }
        data-testid="category"
        onClick={ this.onClick }
        value={ data.id }
      >
        {data.name}
      </button>
    ));
    this.setState({
      categories: list,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias</h3>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

FilterCategories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FilterCategories;
