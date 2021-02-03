import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SeletorOrdenar extends Component {
  render() {
    const { orderFilter, handleOrder } = this.props;
    return (
      <div>
        <label htmlFor="seletor">
          Ordenar por:
          <select value={ orderFilter } onChange={ handleOrder }>
            <option value="">...</option>
            <option value="increasePrice">Menor Preço</option>
            <option value="decreasePrice">Maior Preço</option>
          </select>
        </label>
      </div>
    );
  }
}

SeletorOrdenar.propTypes = {
  orderFilter: PropTypes.string.isRequired,
  handleOrder: PropTypes.func.isRequired,
};
