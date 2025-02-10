import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Signup from './components/signup';
import Product from './components/product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
