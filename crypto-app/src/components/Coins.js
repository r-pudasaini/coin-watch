import React, {useState, useEffect} from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Coins = (props) =>
{

  const [search, setSearch] = useState("")
  const [coins2show, setCoins2show] = useState(props.coins)

  const updateSearch = (value) => {
    setSearch(value)
  }

  const handleClick = () => {
    // now when we click the button, we need to parse all the elements in props, and filter the ones that 
    // do not have the search word within them.

    let arr = props.coins.filter((coin) => coin.id.includes(search) )
    setCoins2show(arr)
  }

  const handleKey = (event) => {
    console.log("called the enter handler")
    console.log(event)
    if (event.key === "Enter")
    {
      handleClick()
    }
  }

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
