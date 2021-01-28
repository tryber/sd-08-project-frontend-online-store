import React from 'react';

export default class PaginaInicial extends React.Component {
  constructor() {
    super();

    this.state = {
      inputStatus: '',
    };
  }

  render() {
    const { inputStatus } = this.state;
    return (
      <div>
        <input
          type="text"
          id="buscador"
          value={ inputStatus }
          // onChange={}
        />
        {inputStatus === '' && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}
      </div>
    );
  }
}
