import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './pages/Showcase';
import Documentation from './pages/Documentation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;