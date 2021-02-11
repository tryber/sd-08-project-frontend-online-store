import React from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    return (
      <Link
        to="/"
      >
        <span className="navbar-brand mr-1">Home</span>
      </Link>

    );
  }
}

export default HomeButton;
