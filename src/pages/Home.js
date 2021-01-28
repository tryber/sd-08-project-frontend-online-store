import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

Home.propTypes = {

};

export default Home;
