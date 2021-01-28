import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QueryInput.css';

class QueryInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { handleClick } = this.props;
    const { inputValue } = this.state;
    handleClick(inputValue);
  }

  onChange({ target: { value } }) {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <section className="query-input-wrapper">
        <input
          placeholder="Buscar produtos, marcas e muito mais..."
          type="text"
          data-testid="query-input"
          value={ inputValue }
          onChange={ this.onChange }
        />
        <button type="button" data-testid="query-button" onClick={ this.onClick }>
          <i className="fas fa-search" />
        </button>
      </section>
    );
  }
}

QueryInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default QueryInput;
