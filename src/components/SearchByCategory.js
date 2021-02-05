import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchByCategory extends Component {
  render() {
    const { produtos } = this.props;
    if (!produtos) return false;
    return (
      <div>
        { Array.from(produtos).map((produto) => (
          <section key={ produto.id } data-testid="product">
            <p>{ produto.title }</p>
            <span>{ produto.price }</span>
            <img src={ produto.thumbnail } alt="Imagem do produto" />
          </section>
        )) }
      </div>
    );
  }
}

SearchByCategory.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
