import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo-title-container">
          <h1>LOGO</h1>
          <h1>NOME DA LOJA</h1>
        </div>
        <h2>SLOGAN</h2>
      </header>
    );
  }
}
