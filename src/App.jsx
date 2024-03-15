import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChulexView from './views/ChulexView';
import PortfolioChulexView from './views/PortfolioChulexView';
import PortfolioHome from './views/PortfolioHome';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/chulex" element={<ChulexView />} />
        <Route path="/portfolioChulex" element={<PortfolioChulexView />} />


      </Routes>
    </Router>
  );
}

export default App;