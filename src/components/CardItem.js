import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends React.Component {
  render() {
    const { cardList } = this.props;
    const { title, price, thumbnail, id, category_id } = cardList;
    return (
      <Link
        to={ `/pages/specefication/${category_id}/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt="imagem do produto" />
          <p>{ price }</p>

        </div>
      </Link>
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
