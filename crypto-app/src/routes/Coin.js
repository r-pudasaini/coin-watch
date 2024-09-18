import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Coin.css'
import {useParams} from 'react-router-dom'
import DOMPurify from 'dompurify'

const Coin = () => {


  const params = useParams();
  const [coin, setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect( () =>
  {
    axios.get(url).then( (response) => {
      setCoin(response.data)
    }).catch( (error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <div className='coin-heading'>
        <p className='rank'> Rank: {coin.market_cap_rank} </p>
        <p className='name'> {coin.name} </p>
        {coin.image ? <img className='coin-img' src={coin.image.small} alt='bitcoin logo' /> : null }
      </div>

      <div className='coin-info'>

        <p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
        }}>

        </p>

      </div>

      <div className='coin-prices'>

        <h2>
          The change in price of {coin.name} over time, in US dollars.
        </h2>

        <div className='table'>
          <div>
            <p className='time'> 1hr</p>
            {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}%</p> : null}
          </div>

          <div>
            <p className='time'> 24hr</p>
            {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}%</p> : null}
          </div>

          <div>
            <p className='time'> 7d </p>
            {coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}%</p> : null}
          </div>


          <div>
            <p className='time'> 14d </p>
            {coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}%</p> : null}
          </div>


          <div>
            <p className='time'> 30d </p>
            {coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}%</p> : null}
          </div>


          <div>
            <p className='time'> 1yr </p>
            {coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}%</p> : null}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Coin;
