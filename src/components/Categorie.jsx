import PropTypes from 'prop-types';
import React from 'react';

class Categorie extends React.Component {
  constructor() {
    super();
    this.Submit = this.Submit.bind(this);
  }

  Submit(event) {
    const { onClick } = this.props;
    onClick(event);
  }

  render() {
    const { items } = this.props;
    const { key, value } = items;
    return (
      <div>
        <input
          type="radio"
          name="category"
          value={ value }
          id={ key }
          data-testid="category"
          onClick={ this.Submit }
        />
        <label htmlFor={ key }>{ value }</label>
      </div>
    );
  }
}

Categorie.propTypes = {
  items: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categorie;
