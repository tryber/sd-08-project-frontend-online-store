import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';

class CategoriesFilter extends Component {
  constructor() {
    super();
    this.state = { categories: [{ id: 0, name: '' }] };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({
      categories,
    }));
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <form>
          <h3>Categorias:</h3>
          { categories.map(
            ({ id, name }) => (
              <label key={ id } htmlFor={ name }>
                <input
                  data-testid="category"
                  type="radio"
                  id={ id }
                  name="categoryId"
                  value={ name }
                  onClick={ handleChange }
                />
                {name}
              </label>
            ),
          ) }
        </form>
      </div>
    );
  }
}

CategoriesFilter.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default CategoriesFilter;
