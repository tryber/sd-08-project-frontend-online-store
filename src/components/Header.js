import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <Link to="/">
            <h1>Frontend Online Store</h1>
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
