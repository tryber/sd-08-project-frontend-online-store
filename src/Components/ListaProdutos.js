import React from 'react';

import * as api from '../services/api';

export default class ListaProdutos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objectAPI: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { inputStatus } = this.props;
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery('', inputStatus);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}
