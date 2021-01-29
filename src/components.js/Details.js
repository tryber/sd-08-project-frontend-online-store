import React from 'react';

class Details extends React.Component {
  render() {
    const { match: { params: { product } } } = this.props;
    return (
      <div>
        { product }
      </div>
    );
  }
}

export default Details;
