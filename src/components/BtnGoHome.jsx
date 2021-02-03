import React from 'react';
import { Link } from 'react-router-dom';

class BtnGoHome extends React.Component {
  render() {
    return (
      <Link to="/">
        <button type="button">HOME</button>
      </Link>
    );
  }
}

export default BtnGoHome;
