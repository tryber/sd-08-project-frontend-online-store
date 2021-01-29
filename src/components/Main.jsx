import React from 'react';

class Main extends React.Component {
  
    window.onstorage = () => {
      // When local storage changes, dump the list to
      // the console.
      console.log(JSON.parse(window.localStorage.getItem('nameProduct')));
    };
  

  render() {
    this.onStorage();
    return (
      <div>DFMKD</div>
    );
  }
}

export default Main;
