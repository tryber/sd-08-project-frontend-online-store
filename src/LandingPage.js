import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      categoryId: '',
      query: '',
      productList: [],
      shoppingCart: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.getProductsFromAPI = this.getProductsFromAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleClick({ target }) {
    this.setState({
      categoryId: target.name,
    }, () => {
      const { categoryId, query } = this.state;
      this.getProductsFromAPI(categoryId, query);
    });
  }

  async getCategoriesList() {
    const listCategories = await api.getCategories();
    this.setState({
      categoriesList: listCategories,
    });
  }

  async getProductsFromAPI(categoryId, query) {
    const apiResponse = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const productList = await apiResponse.results;
    this.setState({
      productList,
    });
  }

  addItemToCart(product) {
    // const cartList = JSON.parse(localStorage.getItem('shoppingCart'));
    // console.log(cartList);
    // const shoppingCart = cartList.includes(product) ? cartList : [...cartList, product];
    // localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    const { shoppingCart } = this.state;
    if (!shoppingCart.includes(product)) {
      this.setState({
        shoppingCart: [...shoppingCart, product],
      });
    }
  }

  renderAddButtonCart(product) {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => this.addItemToCart(product) }
      >
        Adicionar produto ao carrinho
      </button>
    );
  }

  renderCategoryList(categoriesList) {
    return (
      <div>
        {
          categoriesList
            .map((category) => (
              <button
                type="button"
                key={ category.id }
                name={ category.id }
                data-testid="category"
                onClick={ this.handleClick }
              >
                { category.name}
              </button>))
        }
      </div>
    );
  }

  renderFreeShipping() {
    return (
      <div>
        <p style={ { color: 'red' } } data-testid="free-shipping">Frete Grátis</p>
      </div>
    );
  }

  renderProductList(productList) {
    return (
      <div>
        { productList.map((product) => (
          <section
            key={ product.id }
            data-testid="product"
          >
            <p>{product.title}</p>
            {(product.shipping.free_shipping) ? this.renderFreeShipping() : ''}
            <p>
              R$
              {product.price}
            </p>
            <img src={ product.thumbnail } alt={ product.title } />
            <Link
              to={ {
                pathname: '/product-details',
                search: '?sort=name',
                hash: '#the-hash',
                state: { product },
              } }
              data-testid="product-detail-link"
            >
              <button type="button">Detalhes</button>
            </Link>
            { this.renderAddButtonCart(product) }
          </section>
        ))}
      </div>
    );
  }

  render() {
    const { categoriesList, categoryId, query, productList, shoppingCart } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.getProductsFromAPI(categoryId, query) }
        >
          Pesquisar
        </button>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
        />
        <Link
          to={ { pathname: '/shopping-cart', state: { shoppingCart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout', state: { shoppingCart } } }
        >
          Finalizar Compra
        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        { this.renderCategoryList(categoriesList) }
        { this.renderProductList(productList) }
      </div>
    );
  }
}

export default LandingPage;
