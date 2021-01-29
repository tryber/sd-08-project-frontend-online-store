import React from 'react';
import PropTypes from 'prop-types';

export default class SerchBar extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
  }

  getValue({ target }) {
    const { onChange } = this.props;
    onChange(target.value);
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ this.getValue }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SerchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
