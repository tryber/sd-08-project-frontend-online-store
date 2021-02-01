import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <div>
        <select>
          <option value="menor">Menor Preço</option>
          <option value="maior">Maior Preço</option>
        </select>
      </div>

    );
  }
}

export default Dropdown;
