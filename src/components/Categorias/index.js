import React, { Component } from 'react';
import './Categorias.css';

class Categorias extends Component {
  render() {
    const { categorias } = this.props;
    return (
      <div className="cat-container">
        <h3>
          Categorias.
        </h3>
        <nav>
          {categorias && categorias.map((item) => (
            <div data-testid="category" key={ item.id } className="cat-item">
              {item.name}
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default Categorias;
