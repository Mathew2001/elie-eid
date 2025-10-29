import React from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import Function1 from './components/Function1';
import Function2 from './components/Function2';
import Home from './components/Home';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />               {/* renders at "#/" */}
        <Route path="/" element={<Home />} />
        <Route path="/function1" element={<Function1 />} />
        <Route path="/function2" element={<Function2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
