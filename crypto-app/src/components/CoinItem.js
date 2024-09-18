import React from 'react'
import './Coins.css'


const CoinItem = (prop) =>
{

  return (
    <div className='coin-row'>

      <p> {prop.coin.market_cap_rank} </p>
      <div className='img-symbol'>
        <img src={prop.coin.image} alt='' />
        <p> {prop.coin.id} </p>
      </div>

      <p>${prop.coin.current_price.toLocaleString() }</p>
      <p>{prop.coin.price_change_percentage_24h.toLocaleString()}%</p>
      <p className='hide-mobile'>${prop.coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${prop.coin.market_cap.toLocaleString()}</p>

    </div>
  )

}

export default CoinItem;
