import React from 'react';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Button />
      </div>
    );
  }
}

export default Home;
