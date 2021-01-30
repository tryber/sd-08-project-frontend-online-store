import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function ProductCard(props) {
  const {
    product: { id, title, images, price },
  } = props;
  const history = useHistory();

  // const aprice = parsePrice(price);

  const handleClick = () => {
    history.push(`/product/${id}`);
    // handleAddCartClick(product);
  };

  const handleBuyClick = () => {
    const { product } = props;
    console.log(product);
  };

  return (
    <section className="product-card-wraper" data-testid="product-detail-link">
      <button type="button" className="product-card" onClick={ handleClick }>
        <section className="product-card-image">
          <img src={ images } alt={ title } />
        </section>

        <section className="product-card-info">
          <div className="product-card-info-price">
            <span className="price-part-1">R$</span>
            <span className="price-part-2">{price.split(',')[0]}</span>
            <span className="price-part-3">{price.split(',')[1]}</span>
          </div>
          <span className="product-card-info-title">{title}</span>
        </section>
      </button>
      <section className="product-buy">
        <button
          className="product-buy-button"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ handleBuyClick }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category_id: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mercadopago: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }).isRequired,
};
