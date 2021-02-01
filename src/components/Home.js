import React from 'react';
import Search from './Search';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      busca: '',

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  produto(busca) {
    return (
      <div>
        <label htmlFor="busca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="busca"
            name="busca"
            onChange={ this.handleChange }
            data-testid="query-input"
          />
        </label>
        <Search valor={ busca } />
      </div>
    );
  }

  render() {
    const { busca } = this.state;
    return (
      <form>
        { this.produto(busca) }
      </form>
    );
  }
}

export default Home;
