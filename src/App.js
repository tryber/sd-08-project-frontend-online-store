import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  renderInputSearch() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          value={ searchText }
          type="search"
          name="searchText"
          id="id-search"
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header
          className="App-header"
        />
        {this.renderInputSearch()}
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default App;
