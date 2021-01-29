import React from 'react';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <span>{title}</span>
        <span>{`R$${price.toFixed(2)}`}</span>
      </div>
    );
  }
}

export default Card;
