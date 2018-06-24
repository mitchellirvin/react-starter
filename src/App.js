import React, { Component } from 'react';
import ButtonAppBar from './ButtonAppBar';
import ImageGridList from './ImageGridList';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <ImageGridList></ImageGridList>
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    );
  }
}

export default App;
