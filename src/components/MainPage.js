import React from 'react';
// import PropTypes from 'prop-types';

class MainPage extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="input-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="input-text" />
        </label>
      </section>
    );
  }
}

export default MainPage;
