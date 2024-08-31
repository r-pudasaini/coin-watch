import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'

function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=2'

  useEffect(() =>
  {
      axios.get(url).then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      }).catch((error) => {
        console.log(error);
      })
  },[])


  return (
    <>
      <Coins coins={coins} />
    </>
  );
}

export default App;
