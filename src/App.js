// import { useState } from 'react';
import "./App.css";
import Navbar from './components/navbar';
import Home from "./components/home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;