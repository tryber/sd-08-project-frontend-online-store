import React, { Component } from 'react';
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
    const options = [];
    await Api.getCategories()
      .then((data) => data.map((categorie) => options.push(categorie)));
    this.setState({
      categories: options,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <navbar className="sideBar">
        <h4 className="categoryTitle">Categorias</h4>
        <ul className="sideBarUl">
          {categories.map((categorie) => (
            <li
              data-testid="category"
              key={ categorie.id }
              className="categoryItem"
            >
              {categorie.name}
            </li>))}
        </ul>
      </navbar>
    );
  }
}

export default CategoryMenu;
