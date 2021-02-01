import React from 'react';
import * as api from '../services/api';

export default class SearchBar extends React.Component {
  // componentDidMount() {
  //   api.SearchIdFromName('sapato').then((result) => {
  //     console.log(result);
  //   });
  // }

  constructor() {
    super();

    this.typed = this.typed.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      inputTextValue: '',
      isReadyToGo: false,
    };
  }

  onClick() {
    this.setState({ isReadyToGo: true });
  }

  typed(event) {
    this.setState({
      inputTextValue: event.target.value,
      isReadyToGo: false,
    });
  }

  testApi(isReady, word) {
    if (isReady) {
      api.SearchIdFromName(word).then((result) => {
        <Home />
      });
    }
  }

  render() {
    const { inputTextValue, isReadyToGo } = this.state;
    return (
      <div className="search-bar-container">
        <section className="search-bar">
          <input type="text" placeholder="Pesquisa" onChange={ this.typed } />
          <button type="button" onClick={ this.onClick }>Pesquisar</button>
          {this.testApi(isReadyToGo, inputTextValue)}
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
