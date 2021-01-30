import React from 'react';

class InitialMessage extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </div>
    );
  }
}

export default InitialMessage;
