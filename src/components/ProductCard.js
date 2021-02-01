import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    const {
      product: { title, price, thumbnail, id }, query, category, onClick } = this.props;
    if (shouldRedirect) {
      return (
        <Redirect
          to={ {
            pathname: `/ProductDetails/${id}`,
            state: { queryAPI: query, categoryAPI: category } } }
        />
      );
    }
    return (
      <div>
        <div data-testid="product" onClick={ this.handleClick } aria-hidden="true">
          <div data-testid="product-detail-link">
            <h3>{title}</h3>
            <img src={ thumbnail } alt="Imagem do produto" />
            <span>
              R$
              {price}
            </span>
          </div>
        </div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => onClick(title, price) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
