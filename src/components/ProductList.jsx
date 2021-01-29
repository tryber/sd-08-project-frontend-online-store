import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as api from '../services/api'

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      inputText: '',
      productList: [],
    };
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      inputText: text,
    });
  }

  handleClick() {
    const { inputText } = this.state;
    api.getProductsFromCategoryAndQuery(undefined, inputText)
      .then((data) => {
        this.setState({
          productList: data.results,
        });
      });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="App">
        <section className="categorie-container">
          <Categories />
        </section>
        <section>
          <form>
            <input type="text" onChange={ this.handleChange } data-testid="query-input"/>
            <button type="button" onClick={ this.handleClick } data-testid="query-button">Pesquisar</button>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </form>
          <ul>
            { productList.map((item) => (
              <article
                key={ item.id }
                data-testid="product"
              >
                <img src={ item.thumbnail } alt="Imagem do produto" />
                <h3>{ item.title }</h3>
                <p>{ item.price }</p>
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
