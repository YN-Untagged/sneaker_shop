import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';
import NotFound from './components/notFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

