import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import './ProdutoDetail.css';

class ProdutoDetail extends Component {
  constructor(props) {
    super(props);
    const { match: { params: id } } = this.props;
    this.state = {
      produtoId: id.produtoId,
      produto: undefined,
    };
  }

  async componentDidMount() {
    const BASE = 'https://api.mercadolibre.com/items/';
    const { produtoId } = this.state;
    const buscaProdutos = await fetch(`${BASE}${produtoId}`);
    const resultProd = await buscaProdutos.json();
    this.salvaProduto(resultProd);
  }

  salvaProduto(produto) {
    this.setState({
      produto,
    });
  }

  imprimeProduto(produto, foto, price) {
    const { addCart } = this.props;
    return (
      <div
        data-testid="product-detail-name"
        className="prod-main"
        key={ produto.id }
      >
        <h2>{ produto.title }</h2>
        <img src={ foto } alt={ produto.title } />
        <h2>
          Preço:
          { price }
        </h2>

        <FaCartPlus
          className="prod-btn-add"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addCart(produto.id) }
        />
      </div>
    );
  }

  render() {
    const { produto } = this.state;
    const { history } = this.props;
    let foto = '';
    let price = '';
    // window.scrollTo(0, 0);
    if (produto) {
      foto = produto.pictures[0].url;
      price = produto.price;
      price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      price = price.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }
    return (
      <div className="prod-container">
        <button type="button" className="prod-goback" onClick={ history.goBack }>
          <TiArrowBack className="cart-goback-icon" />
          Voltar
        </button>
        {produto
        && this.imprimeProduto(produto, foto, price)}
      </div>
    );
  }
}

ProdutoDetail.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default ProdutoDetail;
