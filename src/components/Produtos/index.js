import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Serach';
import './Produtos.css';
import { Link } from 'react-router-dom';

export default class Produtos extends Component {
  render() {
    const { produtos, buscaInput, submitBotao } = this.props;
    return (
      <div className="produtos-container">
        <Search buscaInput={ buscaInput } submitBotao={ submitBotao } />
        {produtos ? produtos.map((item) => (
          <div className="produtos-card" data-testid="product" key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <p className="produtos-title">{item.title}</p>
            <p className="produtos-price">{item.price}</p>
            <Link data-testid="product-detail-link" to={ `/produto/${item.id}` }>Mais detalhes...</Link>
          </div>
        ))
          : 'Carregando...'}
      </div>
    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  buscaInput: PropTypes.func.isRequired,
  submitBotao: PropTypes.func.isRequired,
};
