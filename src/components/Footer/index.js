import React, { Component } from 'react';
import './Footer.css';

const trybeImg = 'https://uploads-ssl.webflow.com/5fba98ad987231cf0efa3d58/5fba9c9a93a2e77624258d49_Logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-contain">
        Desenvolvido por:
        <ul>
          <a href="https://github.com/rafasysop" target="_blank" rel="noopener noreferrer">
            <li className="footer-lista">
              <img className="footer-foto" src="https://avatars.githubusercontent.com/u/71967181?s=460&u=771dcdb74e9d27067d2b20679151230c7790fd64&v=4" alt="Rafael" />
              Rafael Moura
            </li>
          </a>
          <a href="https://github.com/patriciavsilva" target="_blank" rel="noopener noreferrer">
            <li className="footer-lista">
              <img className="footer-foto" src="https://avatars.githubusercontent.com/u/72472811?s=460&u=dc5bdf1a9717dc73e01d88a6da6c7a8babed3ec8&v=4" alt="Patricia" />
              Patricia Vieira
            </li>
          </a>
          <a href="https://github.com/victorfariass" target="_blank" rel="noopener noreferrer">
            <li className="footer-lista">
              <img className="footer-foto" src="https://avatars.githubusercontent.com/u/71554299?s=460&u=21e71ccdaf698fbad0496ab8cf8d4b54b7f13c2b&v=4" alt="Victor" />
              Victor Farias
            </li>
          </a>
          <a href="https://github.com/Vieira-William" target="_blank" rel="noopener noreferrer">
            <li className="footer-lista">
              <img className="footer-foto" src="https://avatars.githubusercontent.com/u/72472242?s=460&v=4" alt="William" />
              William Vieira
            </li>
          </a>
        </ul>
        <div className="footer-projeto">
          Projeto
          {' '}
          <em><strong>FrontEnd-Online-Store</strong></em>
          {' '}
          desenvolvido na escola:
          {' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">
            <img src={ trybeImg } alt="Trybe" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
