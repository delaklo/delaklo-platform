import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Exam from './components/Exam/Exam';
import Home from './components/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="examjs" element={<Exam />} />
      </Routes>
    </div>
  );
}

export default App;
