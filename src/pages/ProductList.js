import React, { Component } from 'react';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategories: [],
    };

    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    this.setState(async () => {
      const categoryArray = await api.getCategories();
      this.setState({ listCategories: categoryArray });
    });
  }

  render() {
    const { listCategories } = this.state;
    return (
      <div className="header">
        <input type="text" placeholder="Buscar" className="input" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <aside>
          <h3>Categorias:</h3>
          {
            listCategories.map((category) => (
              <div key={ category.id }>
                <label htmlFor="category">
                  <input
                    data-testid="category"
                    type="radio"
                  />
                  { category.name }
                </label>
              </div>
            ))
          }
        </aside>
      </div>
    );
  }
}

export default ProductList;
