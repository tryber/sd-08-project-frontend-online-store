import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p>Projeto desenvolvido no modulo de FrontEnd da Trybe!</p>
        </div>
        <div>
          <img
            src="https://lojasrede.vteximg.com.br/arquivos/selo-reclame-aqui.jpg?v=637223866534200000"
            alt="Imagem reclame aqui"
          />
          <img
            src="https://service.yourviews.com.br/Image/9c0aa0e9-37a2-4b03-93d7-41c964268161/Footer.jpg"
            alt="selo de verificação"
          />
        </div>
      </footer>
    );
  }
}
