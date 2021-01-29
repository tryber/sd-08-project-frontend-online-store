import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Serach';
import './Produtos.css';

export default class Produtos extends Component {
  render() {
    const { produtos } = this.props;
    return (
      <div className="produtos-container">
        <Search />
        {produtos ? produtos.map((item) => (
          <div className="produtos-card" data-testid="product" key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <p className="produtos-title">{item.title}</p>
            <p className="produtos-price">{item.price}</p>
          </div>
        ))
          : 'Carregando...'}
      </div>
    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
