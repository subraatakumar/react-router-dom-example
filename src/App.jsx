import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Users from './screens/Users';
import SingleUser from './screens/SingleUser';
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Home</NavLink>
      <NavLink to="/about" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>About</NavLink>
      <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Contact</NavLink>
      <NavLink to="/users" className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Users</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/singleuser/:user_id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
