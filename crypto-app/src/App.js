import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin'


function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20'

  useEffect(() =>
  {
      axios.get(url).then((response) => {
        setCoins(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [url])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
