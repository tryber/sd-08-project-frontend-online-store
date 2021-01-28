import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <input type="text" placeholder="Buscar" className="input" />
      </div>
    );
  }
}

export default Header;
