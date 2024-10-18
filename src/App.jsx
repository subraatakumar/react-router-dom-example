import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Home</NavLink>
      <NavLink to="/about" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>About</NavLink>
      <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Contact</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
