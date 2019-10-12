import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components

import Header from './components/Header';
import Books from './components/Books';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <Books />
    </div>
  );
}

export default App;
