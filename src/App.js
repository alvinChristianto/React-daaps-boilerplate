import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import About from './components/content/about';
import Content from './components/content';
import Login from './components/content/login';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
