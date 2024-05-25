import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
