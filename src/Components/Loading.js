import React from 'react';
import { BsSearch } from 'react-icons/bs';

class Loading extends React.Component {
  render() {
    return (
      <p className="loading-text"><BsSearch /> Carregando...</p>
    );
  }
}

export default Loading;