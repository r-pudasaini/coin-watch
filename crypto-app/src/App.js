import React, {useState, useEffect} from 'react'
import Coins from './components/Coins'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins/>} />
        <Route path='/coin-watch' element={<Coins/>} />
        <Route path='/coin-watch' element={<Coin/>}>
          <Route path=':coinId' element={<Coin />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
