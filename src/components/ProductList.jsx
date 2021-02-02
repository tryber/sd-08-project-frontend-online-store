import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categories from './Categories';
import ButtonAddToCart from './ButtonAddToCart';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.state = {
      inputText: '',
      selectedCategory: undefined,
    };
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      inputText: text,
    });
  }

  handleQuery() {
    const { inputText, selectedCategory } = this.state;
    const { handleRequest } = this.props;
    handleRequest(selectedCategory, inputText);
  }

  handleClick(event) {
    event.preventDefault();
    this.handleQuery();
  }

  handleCategory(event) {
    this.setState({
      selectedCategory: event.target.id,
    }, () => this.handleQuery());
  }

  renderForm() {
    return (
      <form>
        <input type="text" onChange={ this.handleChange } data-testid="query-input" />
        <button type="submit" onClick={ this.handleClick } data-testid="query-button">
          Pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </form>
    );
  }

  renderProductList() {
    const { productList, handleAddToCart } = this.props;

    if (!productList.length) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <section>
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
            <ButtonAddToCart
              onClick={ handleAddToCart }
              id={ item.id }
              price={ item.price }
              list={ productList }
              dataTestId="product-add-to-cart"
            />
          </article>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div className="App">
        <section className="categorie-container">
          <Categories handleCategory={ this.handleCategory } />
        </section>
        <section>
          {this.renderForm()}
          {this.renderProductList()}
        </section>
      </div>
    );
  }
}

ProductList.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
