import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCardProdutos from '../components/ListaCardProdutos';
import NavBar from '../components/NavBar';

import * as api from '../services/api';

class Listagem extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      listOfProducts: [],
      query: undefined,
      category: undefined,
    };

    this.createAllCategories = this.createAllCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  componentDidMount() {
    this.createAllCategories(this.handleClickCategory);
    this.fetchProducts();
  }

  handleClick(e) {
    e.preventDefault();
    this.fetchProducts();
  }

  async handleClickCategory(e) {
    const { query } = this.state;
    if (query === undefined) {
      await this.setState({
        category: e.target.id,
        query: '',
      });
      this.fetchProducts();
    } else {
      await this.setState({
        category: e.target.id,
      });
      this.fetchProducts();
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProducts() {
    try {
      const { category, query } = this.state;
      const produtos = await api.getProductsFromCategoryAndQuery(category, query)
        .then((data) => data.results);
      const produtosx = produtos.map((prod) => (
        { id: prod.id,
          title: prod.title,
          thumbnail: prod.thumbnail,
          price: prod.price,
          shipping: prod.shipping.free_shipping,
          installments: prod.installments,
        }));
      this.setState({
        listOfProducts: produtosx,
      });
    } catch (error) {
      return undefined;
    }
  }

  async createAllCategories(onClick) {
    const itemList = await api.getCategories();
    const spanList = itemList.map((data) => (
      <button
        type="button"
        key={ data.id }
        id={ data.id }
        data-testid="category"
        onClick={ onClick }
      >
        { data.name }
      </button>));
    this.setState({ categories: spanList });
  }

  render() {
    const { listOfProducts, categories } = this.state;
    return (
      <>
        <header className="header">
          <NavBar handleChange={ this.handleChange } handleClick={ this.handleClick } />
          <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
        </header>
        <main className="main">
          <div className="left-content">
            <div className="categories-list">
              {categories}
            </div>
          </div>
          <div className="right-content">
            <div className="show-products">
              <ListaCardProdutos listOfProducts={ listOfProducts } />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Listagem;
