import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      apiReturn: [],
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
    console.log(apiObjectsReturn);
    this.setState({ apiReturn: apiObjectsReturn });
    // return apiObjectsReturn.length > 0 ? this.listItems() : <li>NÃO ENCONTRADO</li>
  }

  // listItems() {
  //     return (apiReturn.map((product) => {
  //     <li key={ product.id }> { product.id } </li>
  //     } )
  // }

  emptySearch() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
  }

  render() {
    const { inputValue, apiReturn } = this.state;
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
        {this.emptySearch()}
        <section>
          <ul>
          </ul>
        </section>
      </>
    );
  }
}
export default SearchBar;
