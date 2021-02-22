import React from 'react';

import { Link } from 'react-router-dom';

import * as api from '../services/api';

class Search extends React.Component {
  constructor() {
    super();

    this.renderSearchInput = this.renderSearchInput.bind(this);
    this.renderSearchbutton = this.renderSearchbutton.bind(this);
    this.fetchSearchApi = this.fetchSearchApi.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.addProduct = this.addProduct.bind(this);

    this.state = {
      query: '',
      categoryId: undefined,
      products: [],
      allProducts: [],
      emptyCart: false,
    };
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  addProduct(product) {
    const newObj = { ...product, quantity: 1 };
    const { allProducts } = this.state;
    this.setState({
      allProducts: [...allProducts, newObj],
      emptyCart: true,
    });
  }

  saveLocation() {
    const { allProducts, emptyCart } = this.state;
    console.log(allProducts);
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    localStorage.setItem('emptyCart', emptyCart);
  }

  async fetchSearchApi() {
    const { categoryId, query } = this.state;
    const busca = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: busca.results });
  }

  renderSearchbutton() {
    return (
      <button
        data-testid="query-button"
        type="button"
        onClick={ this.fetchSearchApi }
      >
        Buscar
      </button>
    );
  }

  renderSearchInput() {
    return (
      <input data-testid="query-input" onChange={ this.handleChange } />
    );
  }

  renderSearchResults() {
    const { products } = this.state;

    if (products === undefined) {
      return (
        <span>Nenhum produto foi encontrado</span>
      );
    }
    return (
      products.map((product) => (
        <div className="ItemCard" key={ product.id } data-testid="product">
          <p>{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>
            R$:
            { product.price }
          </p>
          <p>{ product.shipping.free_shipping }</p>
          <Link
            to={ {
              pathname: `/${product.id}/detalhes`,
              state: { product },
            } }
            onClick={ this.handleChange }
            data-testid="product-detail-link"
          >
            Ver Detalhes
          </Link>
          <button
            type="button"
            onClick={ () => { this.addProduct(product); this.saveLocation(); } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        <h3
          data-testid="home-initial-message"
          className="SearchText"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        { this.renderSearchInput() }
        { this.renderSearchbutton() }
        { this.renderSearchResults() }
      </div>
    );
  }
}

export default Search;
