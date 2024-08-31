import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) =>
{

  console.log(props)

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
              <CoinItem coin={coin} key={coin.market_cap_rank} />
            )
        })}

      </div>
    </div>
  )

}

export default Coins;
