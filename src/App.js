import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BrowseCharacters from './Pages/BrowseCharacters';
import CharacterDetails from './Pages/CharacterDetails';
import Comics from './Pages/Comics';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-characters" element={<BrowseCharacters />} />
          <Route path="/character-details" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
