import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCardProdutos from '../components/LIstaCardProdutos';
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
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.createAllCategories();
  }

  async handleClick() {
    try {
      const { category, query } = this.state;
      const produtos = await api.getProductsFromCategoryAndQuery(category, query)
        .then((data) => data.results);
      const produtosx = produtos.map((prod) => (
        { id: prod.id,
          title: prod.title,
          thumbnail: prod.thumbnail,
          price: prod.price,
        }));
      this.setState({
        listOfProducts: produtosx,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async createAllCategories() {
    const itemList = await api.getCategories();
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
    const { listOfProducts, categories } = this.state;
    return (
      <div className="main">
        <div className="left-content">
          <div className="categories-list">
            <ul>
              {categories}
            </ul>
          </div>
        </div>
        <div className="right-content">
          <nav className="nav">
            <NavBar handleChange={ this.handleChange } handleClick={ this.handleClick } />
            <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
          </nav>
          <div className="show-products">
            <ListaCardProdutos listOfProducts={ listOfProducts } />
          </div>
        </div>
      </div>
    );
  }
}

export default Listagem;
