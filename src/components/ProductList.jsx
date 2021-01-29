import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.state = {
      inputText: '',
      productList: [],
      selectedCategory: undefined,
    };
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      inputText: text,
    });
  }

  handleRequest() {
    const { inputText, selectedCategory } = this.state;
    api.getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => {
        this.setState({
          productList: data.results,
        });
      });
  }

  handleClick(event) {
    event.preventDefault();
    this.handleRequest();
  }

  handleCategory(event) {
    this.setState({
      selectedCategory: event.target.id,
    }, () => this.handleRequest());
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="App">
        <section className="categorie-container">
          <Categories handleCategory={ this.handleCategory } />
        </section>
        <section>
          <form>
            <input type="text" onChange={ this.handleChange } data-testid="query-input" />
            <button type="submit" onClick={ this.handleClick } data-testid="query-button">
              Pesquisar
            </button>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </form>
          <ul>
            { productList.map((item) => (
              <article
                className="productElement"
                key={ item.id }
                data-testid="product"
              >
                <img src={ item.thumbnail } alt="Imagem do produto" />
                <h3>{ item.title }</h3>
                <p>{ item.price }</p>
                <Link
                  to={ `/details/${item.id}` }
                  data-testid="product-detail-link"
                >
                  Ver detalhes...
                </Link>
              </article>
            ))}
          </ul>
        </section>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </div>
    );
  }
}

export default ProductList;
