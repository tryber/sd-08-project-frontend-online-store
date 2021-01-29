import React from 'react';
import { getCategories } from '../services/api';
import Categories from './Categories';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingCategory: true,
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const data = await getCategories();
    this.setState({
      loadingCategory: false,
      categories: data,
    });
  }

  render() {
    const { loadingCategory, categories } = this.state;

    return (
      <div>
        <div>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            Futura imagem do carrinho
          </Link>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { loadingCategory ? <p>Carregando categorias</p>
          : <Categories categories={ categories } />}
      </div>
    );
  }
}

export default Home;
