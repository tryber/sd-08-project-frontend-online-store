import React from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    return (
      <Link
        to="/"
      >
        <img
          alt="home"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBJgq9VyJ3OzUEsJW0lSRaukc0M9A_eoqJw&usqp=CAU"
          width="50"
          height="50"
        />
      </Link>

    );
  }
}

export default HomeButton;
