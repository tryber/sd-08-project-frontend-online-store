import React from 'react';
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
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { searchText } = this.state;
    getProductsFromCategoryAndQuery('', searchText)
      .then(({ results }) => this.setState({ results }));
    // .then(({ results: { 0: first } }) => console.log(first)); como acessar
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.handleClick } onChange={ this.handleChange } />
        <SearchByTerms results={ results } />
      </div>
    );
  }
}

export default Home;
