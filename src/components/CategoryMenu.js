import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Api from '../services/api';
import './CategoryMenu.css';

class CategoryMenu extends Component {
  constructor() {
    super();

    this.categorieGetList = this.categorieGetList.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categorieGetList();
  }

  async categorieGetList() {
    const options = await Api.getCategories()
      .then((data) => data.map((categorie) => categorie));
    this.setState({
      categories: options,
    });
  }

  render() {
    const { categories } = this.state;
    const { click } = this.props;
    return (
      <navbar className="sideBar">
        <h4 className="categoryTitle">Categorias</h4>
        <ul className="sideBarUl">
          {categories.map((categorie) => (
            <button
              type="button"
              data-testid="category"
              key={ categorie.id }
              className="categoryItem"
              onClick={ () => click(categorie.id) }
            >
              {categorie.name}
            </button>))}
        </ul>
      </navbar>
    );
  }
}

CategoryMenu.propTypes = {
  click: PropTypes.func.isRequired,
};

export default CategoryMenu;
