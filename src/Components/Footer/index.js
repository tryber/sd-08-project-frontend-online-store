import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Projeto desenvolvido no modulo de FrontEnd da Trybe!</p>
        <div className="linkedins">
          <p><a href="https://www.linkedin.com/in/arnaelciogomespereira/" target="_blank">Arnaelcio Gomes</a></p>
          <p><a href="https://www.linkedin.com/in/bianca-caetano-31a2921aa/" target="_blank">Bianca Caetano</a></p>
          <p><a href="https://www.linkedin.com/in/lucas-rodrigues-0107a5b3/" target="_blank">Lucas Rodrigues</a></p>
          <p><a href="https://www.linkedin.com/in/marcela-souza-834696153/" target="_blank">Marcela Souza</a></p>
        </div>

      </footer>
    );
  }
}
