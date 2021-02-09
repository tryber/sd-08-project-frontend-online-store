import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { results, addCart } = this.props;
    return (
      <div>
        { results.map((product) => {
          const { title, thumbnail, price, id } = product;
          return (
            <div key={ id } data-testid="product">
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <img src={ thumbnail } alt="" />
              <p>{ price }</p>
              <Link
                to={ { pathname: `/details/${id}`, product } }
                data-testid="product-detail-link"
              >
                Ver detalhes
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => { addCart(product); } }
              >
                Adicionar ao carrinho
              </button>
              { product.shipping.free_shipping
                && <div data-testid="free-shipping">Frete Grátis</div> }
            </div>
          );
        }) }
      </div>
    );
  }
}

ProductList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProductList;
