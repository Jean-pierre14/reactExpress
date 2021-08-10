import React from 'react';
import Navbar from './components/navbar/navbar';
import SideBar from './components/sidebar/SideBar';
import Feed from './components/feed/Feed';
import RightBar from './components/rightbar/RightBar';

// Style
import "./Home.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default App;
