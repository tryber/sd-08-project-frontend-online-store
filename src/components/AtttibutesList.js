import React from 'react';
import PropTypes from 'prop-types';

class AttributesList extends React.Component {
  render() {
    const { attributes } = this.props;
    if (attributes) {
      return (
        <ul>
          {attributes.map((attribute) => (
            <li key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </li>))}
        </ul>
      );
    }
  }
}
AttributesList.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AttributesList;
