import React from 'react';
import ListAllCategories from './ListAllCategories';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <form>
          <label htmlFor="busca" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="busca"
            />
          </label>
        </form>
        <ListAllCategories categories={ categories } />
      </>
    );
  }
}

export default Home;
