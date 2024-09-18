import React, {useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Coins = (props) =>
{

  const [search, setSearch] = useState("")
  const [coins2show, setCoins2show] = useState(props.coins)
  const [button, setButton] = useState(false)

  const updateSearch = (value) => {
    setSearch(value)
  }

  const handleClick = () => {
    setButton(!button)
  }

  const handleKey = (event) => {
    if (event.key === "Enter")
    {
      handleClick()
    }
  }

  useEffect(() => {

    let arr = props.coins.filter((coin) => coin.id.includes(search))

    if (arr.length > 20)
    {
      arr = arr.slice(0, 20)
    }

    setCoins2show(arr)

  }, [button, props])

  return (
    <div className='container'>
      <div>
        <div className='input-wrapper'>
          <input
            placeholder="Search for a coin..."
            value={search}
            onChange={(e) => updateSearch(e.target.value) }
            onKeyPress={(e) => handleKey(e)}
          />

          <FaSearch
            id="search-icon"
            onClick={handleClick}
          />
        </div>

        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24 hr</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>

        {coins2show.map(coin => {
            return (

              <Link to={`/coin-watch/${coin.id}`} element={<Coin />} key={coin.id}>
                <CoinItem coin={coin}/>
              </Link>
            )
        })}

      </div>
    </div>
  )

}

export default Coins;
