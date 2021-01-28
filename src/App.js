import React from 'react';
import BrowserRouter, { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <MainPage />
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/" component={ MainPage } />
    //     </Switch>
    //   </BrowserRouter>
    );
  }
}

export default App;
