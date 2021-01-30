import React, { Component } from 'react';
import './Categorias.css';
import PropTypes from 'prop-types';

class Categorias extends Component {
  render() {
    const { categorias, funcCategoria } = this.props;
    return (
      <div className="cat-container">
        <h3>
          Categorias.
        </h3>
        <ul>
          {categorias && categorias.map((item) => (
            <li
              key={ item.id }
              className="cat-item"
            >
              <button
                type="button"
                className="cat-btn"
                data-testid="category"
                name={ item.id }
                onClick={ () => funcCategoria(item) }
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Categorias.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.object).isRequired,
  funcCategoria: PropTypes.func.isRequired,
};
export default Categorias;
