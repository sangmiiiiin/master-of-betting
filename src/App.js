import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Index } from './pages/mainPage';
import { LadderGame } from './pages/Ladder';
import { DrowLots } from './pages/DrawLots';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
            <Route index element={<Index />} />
            <Route path='/ladder' element={<LadderGame/>} />
            <Route path='/drowlots' element={<DrowLots/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
