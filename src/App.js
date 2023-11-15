import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Index } from './pages/mainPage';
import { Layout } from './Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Layout />} >
            <Route index element={<Index />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
