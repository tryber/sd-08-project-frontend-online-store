import React from 'react';
import PropTypes from 'prop-types';

class CardItem extends React.Component {
  render() {
    const { cardList } = this.props;
    const { title, price, thumbnail } = cardList;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  cardList: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardItem;
