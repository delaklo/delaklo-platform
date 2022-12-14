import React from 'react';
import { Routes, Route } from "react-router-dom";
import Exam from './components/Exam/Exam';
import Home from './components/Home/Home';
import './App.scss';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="examjs" element={<Exam />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
