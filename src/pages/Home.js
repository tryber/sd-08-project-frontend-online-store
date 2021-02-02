import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cart-icon.png';
import * as api from '../services/api';
import '../Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClik = this.handleClik.bind(this);
    this.handleProducts = this.handleProducts.bind(this);
    this.returnProducts = this.returnProducts.bind(this);

    this.state = {
      categories: [],
      products: [],
      value: '',
      category: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClik() {
    const { category, value } = this.state;
    const product = (await api.getProductsFromCategoryAndQuery(category, value))
      .results;
    this.setState({
      products: product,
    });
  }

  async handleProducts(id) {
    const { value } = this.state;
    const category = (await api.getProductsFromCategoryAndQuery(id, value))
      .results;
    console.log(id);
    this.setState({
      products: category,
    });
  }

  handleClikBtn() {
    console.log('Clicou');
  }

  returnProducts() {
    const { products } = this.state;
    return (
      <div className="show-products">
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <Link
              key={ product.id }
              to={ {
                pathname: `/details/${product.id}`,
                state: { product },
              } }
              data-testid="product-detail-link"
            >
              <div>
                <p>{product.title}</p>
                <img src={ `${product.thumbnail}` } alt={ product.title } />
                <p>{product.price}</p>
              </div>
            </Link>
            <button
              type="submit"
              onClick={ this.handleClikBtn }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <input id="inputText" type="text" />
        <Link to="/cartcheckout" data-testid="shopping-cart-button">
          <img src={ cartIcon } alt="cart icon" className="cartIcon" />
        </Link>
        <p htmlFor="inputText" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            onChange={ this.handleChange }
            name="value"
            data-testid="query-input"
          />
          <button type="button" data-testid="query-button" onClick={ this.handleClik }>
            Pesquisar
          </button>
        </p>
        <div className="homepage">
          <div className="show-category">
            <ul>
              {categories.map((category) => (
                <li key={ category.id }>
                  <Link
                    to="/"
                    data-testid="category"
                    onClick={ () => this.handleProducts(category.id) }
                  >
                    { category.name }
                  </Link>
                </li>
              ))}
            </ul>
            {this.returnProducts()}
          </div>
        </div>
      </div>
    );
  }
}

// comentário para criar uma pull request nova

export default Home;
