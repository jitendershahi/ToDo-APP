import React, { Component } from 'react';
import './App.css';
import { Routes } from './routes/route';
import { Header } from './container/header/header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Routes />
      </div>
    );
  }
}

export default App;
