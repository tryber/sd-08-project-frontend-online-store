import React from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async getProducts() {
    const { query } = this.state;
    const getProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());
    this.setState({
      products: getProducts.results,
    });
  }

  renderInputSearch() {
    return (
      <section>
        <label htmlFor="input-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="input-text" onChange={ this.handleChange } name="query" />
        </label>
      </section>
    );
  }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <div>
          <ShoppingCartButton />
          <Categories />
        </div>
        { this.renderInputSearch() }
        {/* <ProductList products={ products } query={ query } /> */}
      </div>
    );
  }
}

export default MainPage;
