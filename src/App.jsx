import { useState } from 'react'
import Home from './pages/home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/gamelist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;