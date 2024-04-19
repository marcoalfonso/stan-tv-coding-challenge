import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Program from './pages/Program';

const App: React.FC = () => {
  return (
    <div className='app__container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<Program />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;