import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;