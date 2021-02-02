import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListCard extends React.Component {
  render() {
    const { item: { title, price, thumbnail, id }, search } = this.props;
    return (
      <span data-testid="product">
        <p>{ title }</p>
        <img alt="item" src={ thumbnail } />
        <p>{`R$${price}`}</p>
        <div>
          <Link data-testid="product-detail-link" to={ `/details/${search}&${id}` }>
            <button type="button">
              Ver mais detalhes
            </button>
          </Link>
        </div>
      </span>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  search: PropTypes.string.isRequired,
};

export default ListCard;
