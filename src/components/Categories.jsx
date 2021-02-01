import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.state = {
      list: [{ id: 0, name: '' }],
    };

    this.loadingCategories = this.loadingCategories.bind(this);
  }

  componentDidMount() {
    this.loadingCategories();
  }

  async loadingCategories() {
    const list = await api.getCategories();
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const { handleInputRadio } = this.props;
    return (
      <div className="categories-content">
        <h3>Categorias</h3>
        {
          list.map(({ id, name }) => (
            <div key={ id }>
              <input
                type="radio"
                id={ id }
                key={ id }
                value={ name }
                name="categoryId"
                data-testid="category"
                onChange={ handleInputRadio }
              />
              <label htmlFor={ id }>{ name }</label>
            </div>
          ))
        }
      </div>
    );
  }
}

Categories.propTypes = {
  handleInputRadio: PropTypes.func.isRequired,
};

export default Categories;
