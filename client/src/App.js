import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Form from './components/form';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid-2">
        <div className="registration">
          <Form />
        </div>
        <div>
          <h3>Data</h3>
          <p>
            lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
