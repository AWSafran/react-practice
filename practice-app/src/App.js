import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header number={19} string='string' />
    </div>
  );
}

export default App;
