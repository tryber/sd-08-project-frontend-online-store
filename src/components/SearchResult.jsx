import React from 'react';
import PropTypes from 'prop-types';
import ShowDetails from './ShowDetailsButton';
import AddToCart from './AddToCart';

class SearchResult extends React.Component {
  constructor() {
    super();
    const cartItems = this.props;
    this.state = {
      cartItems: { cartItems },
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(id, title, amount) {
    const stateCartItems = this.state.cartItems;
    if (stateCartItems[id]) {
      stateCartItems[id].amount += amount;
    } else {
      stateCartItems[id] = { id, title, amount };
    }
  }

  renderCard() {
    const { productsList, cartItems } = this.props;
    return (
      <ul className="product-card" key={ productsList.id }>
        {
          productsList.map(({ id, title, thumbnail, price, attributes, condition, address,
            // available_quantity, sold_quantity, stop_time, accepts_mercadopago, currency_id,
          }) => (
            <li key={ id } data-testid="product" className="product-by-query">
              <h3 className="product-title">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p className="product-price">{ price }</p>
              <ShowDetails
                id={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                attributes={ attributes }
                // available_quantity={ available_quantity }
                // sold_quantity={ sold_quantity }
                // stop_time={ stop_time }
                // accepts_mercadopago={ accepts_mercadopago }
                // currency_id={ currency_id }
                // shipping={ shipping }
                address={ address }
                condition={ condition }
                // cartitems={ cartItems }
              />
              <AddToCart onClickCallback={ this.handleAddToCart } />
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
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default SearchResult;
