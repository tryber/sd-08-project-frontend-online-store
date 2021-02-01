import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Stars.css';

class Stars extends React.Component {
  render() {
    return (
      <div className="stars">
        <button type="button" onClick={ () => 1 }>
          <AiFillStar />
        </button>
        <button type="button" onClick={ () => 1 }>
          <AiFillStar />
        </button>
        <button type="button" onClick={ () => 1 }>
          <AiFillStar />
        </button>
        <button type="button" onClick={ () => 1 }>
          <AiFillStar />
        </button>
        <button type="button" onClick={ () => 1 }>
          <AiFillStar />
        </button>
      </div>
    );
  }
}

export default Stars;
