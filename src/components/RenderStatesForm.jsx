import React from 'react';
import PropTypes from 'prop-types';

class RenderStatesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: true,
      states: [],
    };
    this.sortState = this.sortState.bind(this);
    this.renderSelectStates = this.renderSelectStates.bind(this);
  }

  componentDidMount() {
    this.getFetchStates(this.sortState);
  }

  async getFetchStates(callback) {
    const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    try {
      const data = await fetch(URL);
      const items = await data.json();
      await callback(items);
    } catch (e) {
      this.setState({ error: e });
    }
  }

  sortState(items) {
    const results = items.map((item) => item.sigla).sort().map((item, index) => ({
      id: index,
      sigla: item,
    }));
    this.setState(
      () => ({
        states: results.map((item) => ({
          id: item.id,
          sigla: item.sigla,
        })),
        isLoaded: false,
      }),
    );
  }

  renderSelectStates() {
    const { stateClient, handleChange } = this.props;
    const currentValue = stateClient || 'DEFAULT';
    const { states } = this.state;
    return (
      <div className="field-states">
        <select
          required
          onChange={ handleChange }
          value={ currentValue }
          name="stateClient"
        >
          <option value="DEFAULT" disabled hidden>Estado</option>
          {states.map((item) => (
            <option key={ item.id } value={ item.sigla }>{ item.sigla }</option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    const { isLoaded, error } = this.state;
    if (isLoaded) return <span>Loading...</span>;
    if (error) return <span>{`Erro: ${error}`}</span>;
    return (
      <div>
        { this.renderSelectStates()}
      </div>
    );
  }
}

RenderStatesForm.propTypes = {
  stateClient: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RenderStatesForm;
