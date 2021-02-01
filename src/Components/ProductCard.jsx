import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { productInfo, id } = this.props;
    return <Redirect to={{ pathname: `/ProductDetails/${id}`, state: { productInfo, }} }/>;
  }

  render() {
    const { product: { title, price, thumbnail, productInfo, id } } = this.props;
    return (
      <div data-testid="product">
          <div data-testid="product-detail-link" onClick={ this.handleClick } >
          <Redirect to={{ pathname: `/ProductDetails/${id}`, state: { productInfo, }} }/>
          <h3>{title}</h3>
          <img src={ thumbnail } alt="Imagem do produto" />
          <span>
            R$
            {price}
          </span>
        </div>
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
  };

  export default ProductCard;
  