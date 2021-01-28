import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as apiConsult from '../services/api';

class Listagem extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.createAllCategories = this.createAllCategories.bind(this);
  }

  componentDidMount() {
    this.createAllCategories();
  }

  async createAllCategories() {
    const itemList = await apiConsult.getCategories();
    console.log(itemList);
    const spanList = itemList.map((data) => (
      <li
        key={ data.id }
        data-testid="category"
      >
        { data.name }
      </li>));
    this.setState({ categories: spanList });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="main">
        <div className="categorias">
          <ul>
            {categories}
          </ul>
        </div>
        <label htmlFor="busca" data-testid="home-initial-message">
          <input type="text" id="busca" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
      </div>
    );
  }
}

export default Listagem;
