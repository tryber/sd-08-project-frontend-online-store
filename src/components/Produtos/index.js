import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import Categorias from '../Categorias';
import Search from '../Serach';
import './Produtos.css';

export default class Produtos extends Component {
  render() {
    const {
      produtos,
      buscaInput,
      submitBotao,
      categorias,
      funcCategoria,
      addCart } = this.props;
    // window.scrollTo(0, 0);
    return (
      <div className="produtos-main">
        <Categorias
          categorias={ categorias }
          funcCategoria={ funcCategoria }
        />
        <div className="produtos-container">
          <Search buscaInput={ buscaInput } submitBotao={ submitBotao } />

          {produtos ? produtos.map((item) => (
            <div className="produtos-card" data-testid="product" key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <p
                className="produtos-title"
                data-testid="shopping-cart-product-name"
              >
                {item.title}
              </p>
              <p className="produtos-price">{item.price}</p>
              <Link
                data-testid="product-detail-link"
                to={ `/produto/${item.id}` }
              >
                Mais detalhes...
              </Link>
              <FaCartPlus
                className="prod-btn-add"
                data-testid="product-add-to-cart"
                onClick={ () => addCart(item.id) }
              />
            </div>
          ))
            : 'Carregando...'}
        </div>
      </div>

    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  buscaInput: PropTypes.func.isRequired,
  submitBotao: PropTypes.func.isRequired,
  categorias: PropTypes.arrayOf(PropTypes.object).isRequired,
  funcCategoria: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
};
