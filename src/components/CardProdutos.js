import React from 'react';
import PropTypes from 'prop-types';

class CardProdutos extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    const priceStr = price.toString();
    const UNIDADE_REAL = 3;
    const reais = priceStr.subString(0, priceStr.lenght - UNIDADE_REAL);
    const centavos = priceStr.subString(priceStr.lenght - 2, priceStr.lenght - 1);
    return (
      <div>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${reais},${centavos}` }</p>
      </div>
    );
  }
}

CardProdutos.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProdutos;
