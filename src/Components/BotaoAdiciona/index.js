import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BotaoAdiciona extends Component {
  constructor() {
    super();
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  addToLocalStorage(product) {
    const { title, price, thumbnail, id } = product;
    if (localStorage.getItem('PRODUTOS')) {
      const local = JSON.parse(localStorage.getItem('PRODUTOS'));
      local.forEach((item) => {
        if (Object.values(item).includes(id)) {
          item.quantity += 1;
          localStorage.setItem('PRODUTOS', JSON.stringify(local));
        } else {
          localStorage.setItem('PRODUTOS',
            JSON.stringify([...local, { title, price, thumbnail, id, quantity: 1 }]));
        }
      });
    } else {
      localStorage.setItem('PRODUTOS',
        JSON.stringify([{ title, price, thumbnail, id, quantity: 1 }]));
    }
  }

  render() {
    const { testId, product } = this.props;
    return (
      <button
        type="button"
        onClick={ () => this.addToLocalStorage(product) }
        data-testid={ testId }
      >
        ADICIONAR
      </button>
    );
  }
}

BotaoAdiciona.propTypes = {
  testId: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,

};
