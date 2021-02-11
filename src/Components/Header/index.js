import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1> Shopping </h1>
        <img
          src="https://go.betrybe.com/hubfs/logo%20cortada%20branca.png"
          alt="Logotipo Trybe"
          className="logoTrybe"
        />
      </header>
    );
  }
}
