import React from 'react';
import PropTypes from 'prop-types';
import CardProdutos from './CardProdutos';

class ListaCardProdutos extends React.Component {
  render() {
    const { listOfProducts } = this.props;
    if (!listOfProducts) {
      return <> </>;
    }
    if (listOfProducts.length === 0) {
      return (
        <h2>Nenhum produto foi encontrado</h2>
      );
    }
    return (
      <>
        {listOfProducts.map((products) => (
          <CardProdutos
            key={ products.id }
            id={ products.id }
            title={ products.title }
            thumbnail={ products.thumbnail }
            price={ products.price }
            shipping={ products.shipping }
            installments={ products.installments }
          />))}
      </>
    );
  }
}

ListaCardProdutos.propTypes = {
  listOfProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

ListaCardProdutos.defaultProps = {
  listOfProducts: undefined,
};
export default ListaCardProdutos;
