import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };

    this.getCategoriesList = this.getCategoriesList.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  async getCategoriesList() {
    const listCategories = await api.getCategories();
    this.setState({
      categoriesList: listCategories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        <input type="text" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          {
            categoriesList
              .map((category) => (
                <div key={ category.id } data-testid="category">
                  { category.name }
                </div>))
          }
        </div>
      </div>
    );
  }
}

export default LandingPage;
