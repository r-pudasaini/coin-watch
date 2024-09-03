import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'

const Coins = (props) =>
{

  return (
    <div className='container'>
      <div>

        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24 hr</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>

        {props.coins.map(coin => {
            return (

              <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                <CoinItem coin={coin}/>
              </Link>
            )
        })}

      </div>
    </div>
  )

}

export default Coins;
