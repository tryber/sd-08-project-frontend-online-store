import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      // value: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <div>
        <h1>Mkt Sales</h1>
        <label htmlFor="textInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="textInput" />
        </label>
      </div>
    );
  }
}

export default Home;
