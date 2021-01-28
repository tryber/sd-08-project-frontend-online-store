import React from 'react';

import * as api from '../services/api';

export default class Request extends React.Component {
  render() {
    return (
      <div>
        {console.log(api.getProductsFromCategoryAndQuery('', 'computador')) }
        request
      </div>
    );
  }
}
