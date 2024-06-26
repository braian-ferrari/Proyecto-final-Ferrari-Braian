import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NosotrosContainer from './components/NosotrosContainer/NosotrosContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CartProvider from './Context/Cart/CartProvider';

function App() {
  return (
    <Router>
      <Navbar />
      <CartProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<ItemDetailContainer />} />
      <Route path="/Cart" element={<ItemCartContainer/>} />
      <Route path="/:tipo" element={<ItemListContainer />} />
        <Route path="/Adidas/:marca" element={<ItemListContainer />} />
        <Route path="/Nike/:marca" element={<ItemListContainer />} />
        <Route path="/UnderArmour/:marca" element={<ItemListContainer />} />
        <Route path="/Puma/:marca" element={<ItemListContainer />} />
        <Route path="/Jordan/:marca" element={<ItemListContainer />} />
        <Route path="/Nosotros" element={<NosotrosContainer />} />
        <Route path="/Calzado/:tipo" element={<NosotrosContainer />} />
        <Route path="/Indumentaria/:tipo" element={<NosotrosContainer />} />
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
