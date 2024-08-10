import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './pages/cart';
import Home from './pages/landingPage';
import Men from './pages/men'
import Checkout from './pages/checkout';
import PlacedOrder from './pages/placedOrder';
import Women from './pages/women';
import Children from './pages/children';
import FlashSale from './pages/flashSale';
import Products from './components/products';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/men' element = {<Men/>}/>
        <Route exact path = '/women' element = {<Women/>}/>
        <Route exact path = '/children' element = {<Children/>}/>
        <Route exact path = '/flashsale' element = {<FlashSale/>}/>
        <Route exact path = '/order' element = {<PlacedOrder/>}/>
        <Route exact path = '/products' element = {<Products/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
