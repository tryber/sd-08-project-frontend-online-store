import React from 'react';
import PropTypes from 'prop-types';
import ShowDetails from './ShowDetailsButton';

class SearchResult extends React.Component {
  renderCard(productsList) {
    return (
      productsList.map(({ id, title, thumbnail, price }) => (
        <section className="product-card" data-testid="product" key={ id }>
          <h3 className="product-title">{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p className="product-price">{ price }</p>
          <ShowDetails />
        </section>))
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
