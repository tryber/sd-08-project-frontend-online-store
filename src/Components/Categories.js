import React from 'react';

import * as api from '../services/api';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      results: [],
    };

    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  setResults(termo) {
    const categoryId = null;
    api.getProductsFromCategoryAndQuery(categoryId, termo).then((resultado) => {
      const { results } = resultado;
      this.setState({ results });
    });
  }

  render() {
    const { categories, results } = this.state;

    return (
      <section className="sec-categories">
        <div className="categories-list main-container">
          <h3 className="special-text">Escolha uma Categoria</h3>
          <ul>
            { categories.map((cat) => {
              const { id, name } = cat;
              return <li data-testid="category" key={ id }>{ name }</li>;
            }) }
          </ul>
        </div>
        <div className="div-separator">
          <SearchBar className="categories-searchbar" onClick={ this.setResults } />
          <ProductList results={ results } />
        </div>
      </section>
    );
  }
}

export default Categories;
