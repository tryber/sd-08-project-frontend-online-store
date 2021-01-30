import React from 'react';
import { Link } from 'react-router-dom';

class ShowDetails extends React.Component {
  render() {
    return (
      <Link to="/pages/product/:id">Product Details</Link>
    );
  }
}

export default ShowDetails;
