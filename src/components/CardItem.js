import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends React.Component {
  constructor() {
    super();
    this.storageOnLocalStorage = this.storageOnLocalStorage.bind(this);
  }

  storageOnLocalStorage() {
    const { cardList } = this.props;
    localStorage.setItem(`Product${cardList.id}`, JSON.stringify(cardList));
  }

  render() {
    const { cardList } = this.props;
    const { title, price, thumbnail, id, category_id: category } = cardList;
    return (
      <>
        <Link
          to={ `/pages/specefication/${category}/${id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt="imagem do produto" />
            <p>{ price }</p>

          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.storageOnLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </>
    );
  }
}

CardItem.propTypes = {
  cardList: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
};

export default CardItem;
