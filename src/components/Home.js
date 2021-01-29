import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingCategory: true,
      categories: [],
      searchText: '',
      loadingProducts: false,
      products: [],
      renderProducts: false,
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  async fetchCategories() {
    const data = await getCategories();
    this.setState({
      loadingCategory: false,
      categories: data,
    });
  }

  search() {
    const { searchText } = this.state;
    this.setState({ renderProducts: true, loadingProducts: true }, async () => {
      const dataObj = await getProductsFromCategoryAndQuery('', searchText);
      const data = dataObj.results;
      this.setState({ loadingProducts: false, products: data });
    });
  }

  render() {
    const { loadingCategory, categories, searchText,
      products, loadingProducts, renderProducts } = this.state;

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
        <input
          type="text"
          onChange={ this.onChange }
          value={ searchText }
          data-testid="query-input"
        />
        <button type="button" data-testid="query-button" onClick={ this.search }>
          Buscar
        </button>
        { renderProducts
        && (loadingProducts ? <p>Carregando produtos</p>
          : <ProductList products={ products } />) }
      </div>
    );
  }
}

export default Home;
