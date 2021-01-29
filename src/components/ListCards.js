import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCards extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <section>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>
      </section>);
  }
}

export default ListCards;
