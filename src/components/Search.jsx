import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    console.log(value);
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          value={ value }
          onChange={ this.handleChange }
        />
        <input type="submit" value="Enviar" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </form>
    );
  }
}

export default Search;
