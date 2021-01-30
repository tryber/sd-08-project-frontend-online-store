import React from 'react';
import PropTypes from 'prop-types';
import CardProducts from './CardProducts';

class ListagemDeProdutos extends React.Component {
  render() {
    const { products, addCart } = this.props;

    if (products.length === 0) {
      return (
        <div className="zeroProducts">Nenhum produto foi encontrado</div>
      );
    }

    return (
      <div className="cardsDiv">
        { products.map((product) => (<CardProducts
          key={ product.id }
          product={ product }
          addCart={ addCart }
        />)) }
      </div>
    );
  }
}

ListagemDeProdutos.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default ListagemDeProdutos;
