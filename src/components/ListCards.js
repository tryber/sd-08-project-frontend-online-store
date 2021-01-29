import React, { Component } from 'react';

class ListCard extends Component() {
  constructor() {
    super();

    this.ListFormation = this.ListFormation.bind(this);
  }

  ListFormation(props) {
    const { objectrecived } = props;
    objectrecived.map((result) => (
      <div key={ result.id }>
        <p>{result.title}</p>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>
          R$
          {result.price}
        </p>
      </div>));
  }

  componentDidMount() {
    console.log(test);
  }

  render() {
    return (
      <section>
        {this.ListFormation(this.props)}
      </section>
    );
  }
}

export default ListCard;
