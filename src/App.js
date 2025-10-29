import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Function1 from './components/Function1';
import Function2 from './components/Function2';
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/function1" element={<Function1 />} />
        <Route path="/function2" element={<Function2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
