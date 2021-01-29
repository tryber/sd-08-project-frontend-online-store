import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class ListCards extends Component {
  render() {
    const { prop } = this.props;
    const { title, price, thumbnail } = prop;
    return (
      <section data-testid="product" className="section-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>
      </section>
    );
  }
}

export default ListCards;
