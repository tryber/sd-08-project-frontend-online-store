import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonStar(props) {
  const { star, value, handleClick } = props;
  const styleOn = {
    color: '#ffe600',
  };
  const styleOff = {
    color: '#dfdfdf',
  };
  const handleStarClick = () => {
    if (handleClick) {
      handleClick(value);
    }
  };
  return (
    <div>
      <button type="button" className="button-star" onClick={ handleStarClick }>
        {star ? (
          <i className="fas fa-star" style={ styleOn } />
        ) : (
          <i className="fas fa-star" style={ styleOff } />
        )}
      </button>
    </div>
  );
}

ButtonStar.defaultProps = {
  handleClick: null,
};

ButtonStar.propTypes = {
  star: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};
