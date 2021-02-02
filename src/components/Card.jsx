import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Card.css';

class Card extends React.Component {
  render() {
    const { product, handleChangeClickBuyProduct } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div key={ id } data-testid="product" className="item-card">
        <img
          className="card-image"
          src={ thumbnail.replace('I', 'O') }
          alt={ title }
        />
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/details/${id}`,
            state: { product },
          } }
        >
          Detalhes
        </Link>
        <span className="card-title">{title}</span>
        <span className="card-price">
          {' '}
          {`R$${price}`}
        </span>
        <div>
          <button
            id={ id }
            name="buyProductsId"
            type="button"
            onClick={ handleChangeClickBuyProduct }
            data-testid="product-add-to-cart"
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.string,
  }),
  handleChangeClickBuyProduct: PropTypes.func.isRequired,
};

Card.defaultProps = {
  product: {
    id: '',
    title: '',
    thumbnail: '',
    price: '',
  },
};

export default Card;
