import React from 'react';
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
