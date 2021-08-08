import React from 'react';
import Form from './components/form';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
