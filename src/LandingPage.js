import React from 'react';
import * as api from './services/api';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.getListCategories = this.getListCategories.bind(this);
  }

  componentDidMount() {
    this.getListCategories();
  }

  async getListCategories() {
    const listCategories = await api.getCategories();
    this.setState({
      categories: listCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          {
            categories
              .map((category) => (
                <div key={ category.id } data-testid="category">
                  { category.name }
                </div>))
          }
        </div>
      </div>
    );
  }
}

export default LandingPage;
