import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardItem from './CardItem';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      apiReturn: [],
      teste: true,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.listItems = this.listItems.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({ inputValue: target.value });
  }

  async onClickHandler() {
    const { inputValue } = this.state;
    const apiObjectsReturn = (await getProductsFromCategoryAndQuery('', inputValue))
      .results;
    this.setState({ apiReturn: apiObjectsReturn, teste: false },
      () => console.log('apiReturn', this.state.apiReturn));
  }

  listItems() {
    return (
      this.state.apiReturn.map((product) => (
        <li key={ product.id }>
          <CardItem cardList={ product } />
        </li>
      ))
    );
  }

  emptySearch() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
  }

  render() {
    const { inputValue, apiReturn, teste } = this.state;
    const emptyReturnApi = <p>Nenhum produto foi encontraado</p>;
    console.log(teste);
    return (
      <>
        <form>
          <input
            name="inputValue"
            value={ inputValue }
            data-testid="query-input"
            onChange={
              this.onChangeHandler
            }
          />
          <button
            type="button"
            id="btnBusca"
            data-testid="query-button"
            onClick={ this.onClickHandler }
          >
            BUTÃO
          </button>
        </form>
        <section>
          <ul>
            { teste && this.emptySearch() }
            { !teste && apiReturn.length < 1 && emptyReturnApi }
            { this.listItems() }
          </ul>
        </section>
      </>
    );
  }
}
export default SearchBar;
