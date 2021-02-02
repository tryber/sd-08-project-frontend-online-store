import React from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    return (
      <Link
        to="/"
      >
        <img
          alt="home"
          src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
          width="50"
          height="50"
        />
      </Link>

    );
  }
}

export default HomeButton;
