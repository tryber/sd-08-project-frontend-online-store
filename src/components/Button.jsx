import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonText, name, onClick, dataTestId } = this.props;
    return (
      <button
        type="button"
        name={ name }
        onClick={ onClick }
        data-testid={ dataTestId }
      >
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Button;
