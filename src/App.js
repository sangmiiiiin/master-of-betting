import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Index } from './pages/mainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
            <Route index element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
