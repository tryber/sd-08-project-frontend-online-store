import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div
        data-testid="product-detail-name"
        className="prod-main"
        key={ produto.id }
      >
        <h2>{ produto.title }</h2>
        <img src={ foto } alt={ produto.title } />
        <p>
          Preço:
          { price }
        </p>
      </div>
    );
  }

  render() {
    const { produto } = this.state;
    let foto = '';
    let price = '';
    window.scrollTo(0, 0);
    if (produto) {
      console.log(produto);
      foto = produto.pictures[0].url;
      price = produto.price;
      price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      price = price.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }
    return (
      <div className="prod-container">
        {produto
        && this.imprimeProduto(produto, foto, price)}
      </div>
    );
  }
}

ProdutoDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProdutoDetail;
