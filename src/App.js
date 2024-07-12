import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './pages/cart';
import Home from './pages/landingPage';
import LandingPageMen from './pages/landingPageMen'
import Checkout from './pages/checkout';
import PlacedOrder from './pages/placedOrder';
import LandingPageWomen from './pages/landingPageWomen';
import LandingPageChildren from './pages/landingPageChildren';
import FlashSale from './pages/flashSale';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/men' element = {<LandingPageMen/>}/>
        <Route exact path = '/women' element = {<LandingPageWomen/>}/>
        <Route exact path = '/children' element = {<LandingPageChildren/>}/>
        <Route exact path = '/flashsale' element = {<FlashSale/>}/>
        <Route exact path = '/order' element = {<PlacedOrder/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
