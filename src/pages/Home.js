import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import SearchByTerms from '../components/SearchByTerms';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    /* this.handleClickCategory = this.handleClickCategory.bind(this); */
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(id) {
    const { searchText } = this.state;
    getProductsFromCategoryAndQuery(id, searchText)
      .then(({ results }) => this.setState({ results }));
  }

  /*   async handleClickCategory(id) {
    const { searchCategory } = this.state;
    await getProductsFromCategoryAndQuery(id, '')
      .then(({ searchCategory }) => this.setState({ searchCategory }));
  } */

  render() {
    const { results } = this.state;
    return (
      <div>
        <CartButton />
        <SearchBar onClick={ this.handleClick } onChange={ this.handleChange } />
        <Categories onClick={ this.handleClick } />
        <SearchByTerms results={ results } />
      </div>
    );
  }
}

export default Home;
