import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p>Projeto desenvolvido no modulo de FrontEnd da Trybe!</p>
          <div className="linkedins">
            <p><a href="https://www.linkedin.com/in/arnaelciogomespereira/" target="_blank">Arnaelcio Gomes</a></p>
            <p><a href="https://www.linkedin.com/in/bianca-caetano-31a2921aa/" target="_blank">Bianca Caetano</a></p>
            <p><a href="https://www.linkedin.com/" target="_blank">Lucas Rodrigues</a></p>
            <p><a href="https://www.linkedin.com/in/marcela-souza-834696153/" target="_blank">Marcela Souza</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
