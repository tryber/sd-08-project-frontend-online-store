import React from 'react';

export default class Details extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind(this);
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    const { id } = this.props.params.match;
    fetch('https://api.mercadolibre.com/sites/MLB/search?')
      .then((Response) => Response.json())
      .then((data) => data.find((elem) => elem.id === id))
      .then((product) => {
        this.setState({
          product,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>
          `$
          {title}
          - R$ $
          {price}
          `
        </h2>
        <img src={ thumbnail } alt={ title } />

      </div>
    );
  }
}
