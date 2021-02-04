import React from 'react';
import PropTypes from 'prop-types';
import ShowDetails from './ShowDetailsButton';
import AddToCartButton from './AddToCartButton';

class SearchResult extends React.Component {
  renderCard() {
    const { productsList, handleAddItemToCart, handleProductRating, cartItems,
      setLocalStorageState,
    } = this.props;
    // console.log(handleProductRating);
    return (
      <ul className="product-card" key={ productsList.id }>
        {
          productsList.map(({ id, title, thumbnail, price, attributes, condition, address,
            shipping,
            // available_quantity, sold_quantity, stop_time, accepts_mercadopago, currency_id,
          }) => (
            <li key={ id } data-testid="product" className="product-by-query">
              <h3 className="product-title">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p className="product-price">{ price }</p>
              {shipping.free_shipping && <p data-testid="free-shipping">Frete grátis</p>}
              <ShowDetails
                productsList={ productsList }
                handleProductRating={ handleProductRating }
                id={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                attributes={ attributes }
                address={ address }
                condition={ condition }
              />
              <AddToCartButton
                handleAddItemToCart={ handleAddItemToCart }
                setLocalStorageState={ setLocalStorageState }
                productsList={ productsList }
                cartItems={ cartItems }
                id={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                attributes={ attributes }
                address={ address }
                condition={ condition }
              />
            </li>
          ))
        }
      </ul>
    );
  }

  renderInitialMessage() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </div>
    );
  }

  render() {
    const { productsList } = this.props;
    return (
      productsList.length < 1
        ? this.renderInitialMessage()
        : this.renderCard(productsList)
    );
  }
}

SearchResult.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
}.isRequired;

export default SearchResult;
