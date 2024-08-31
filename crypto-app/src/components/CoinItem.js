import React from 'react'


const CoinItem = (prop) =>
{
  console.log(prop)

  return (
    <div className='coin-row'>

      <p> {prop.coin.market_cap_rank} </p>
      <div className='img-symbol'>
        <img src={prop.coin.image} alt='' />
        <p> {prop.coin.symbol}</p>
      </div>

      <p>{prop.coin.current_price}</p>
      <p>{prop.coin.price_change_percentage_24h}</p>
      <p className='hide-mobile'>{prop.coin.total_volume}</p>
      <p className='hide-mobile'>{prop.coin.market_cap}</p>

    </div>
  )

}

export default CoinItem;
