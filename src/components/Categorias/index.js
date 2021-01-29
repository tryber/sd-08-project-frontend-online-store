import React, { Component } from 'react';
import './Categorias.css';

class Categorias extends Component {
  render() {
    const { categorias, funcCategoria } = this.props;
    return (
      <div className="cat-container">
        <h3>
          Categorias.
        </h3>
        <nav>
          {categorias && categorias.map((item) => (
            <div
              data-testid="category"
              key={ item.id }
              className="cat-item"
            >
              <button type="button" name={ item.id } onClick={ funcCategoria }>
                {item.name}
              </button>
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default Categorias;
