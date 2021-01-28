import React from 'react';
import PropTypes from 'prop-types';
import CardProdutos from './CardProdutos';

class ListaCardProdutos extends React.Component {
  render() {
    const { listOfProducts } = this.props;
    return (
      <div>
        {console.log(listOfProducts)}
        {listOfProducts.map((products) => (
          <CardProdutos
            key={ products.id }
            title={ products.title }
            thumbnail={ products.thumbnail }
            price={ products.price }
          />))}
      </div>
    );
  }
}

ListaCardProdutos.propTypes = {
  // listOfProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  listOfProducts: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default ListaCardProdutos;
