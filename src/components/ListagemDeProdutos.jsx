import React from 'react';
import PropTypes from 'prop-types';
import CardProducts from './CardProducts';

class ListagemDeProdutos extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        { products.map((product) => (<CardProducts
          key={ product.id }
          product={ product }
        />)) }
      </div>
    );
  }
}

ListagemDeProdutos.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListagemDeProdutos;
