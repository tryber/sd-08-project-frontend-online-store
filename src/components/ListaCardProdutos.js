import React from 'react';
import PropTypes from 'prop-types';
import CardProdutos from './CardProdutos';

class ListaCardProdutos extends React.Component {
  render() {
    const { listOfProducts, addToCart } = this.props;
    if (!listOfProducts) {
      return <> </>;
    }
    if (listOfProducts.length === 0) {
      return (
        <h2>Nenhum produto foi encontrado</h2>
      );
    }
    return (
      <div>
        {listOfProducts.map((product) => (
          <CardProdutos
            key={ product.id }
            products={ product }
            addToCart={ addToCart }
          />))}
      </div>
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
  addToCart: PropTypes.func.isRequired,
};

ListaCardProdutos.defaultProps = {
  listOfProducts: undefined,
};
export default ListaCardProdutos;
