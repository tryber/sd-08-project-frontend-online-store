import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { search } = this.state;
    return (
      <div className="search-bar-container">
        <section className="search-bar">
          <input
            type="text"
            placeholder="Pesquisa"
            data-testid="query-input"
            value={ search }
            onChange={ this.onSearch }
          />
          {}
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
