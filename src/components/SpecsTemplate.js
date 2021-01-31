import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpecsTemplate extends Component {
  render() {
    const { itemInfo } = this.props;
    const { thumbnail, title, price } = itemInfo;
    return (
      <div>
        <img src={ thumbnail } alt="imagem do produto" />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{ price }</p>
      </div>
    );
  }
}

export default SpecsTemplate;

SpecsTemplate.defaultProps = {
  itemInfo: {},
};

SpecsTemplate.propTypes = {
  itemInfo: PropTypes.object,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
