import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NosotrosContainer from './components/NosotrosContainer/NosotrosContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/Cart/CartProvider';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
          <Route path="/nosotros" element={<NosotrosContainer />} />
          <Route path="/:marca" element={<ItemListContainer />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
