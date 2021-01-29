import React from 'react';

class ItemCard extends React.Component {
  render() {
    const { title, img, price } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{title}</h1>
        <img alt="" src={ img } />
        <p>{price}</p>
      </div>
    );
  }
}

export default ItemCard;
