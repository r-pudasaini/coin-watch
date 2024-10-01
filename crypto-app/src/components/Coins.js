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
  const [numCoins2show, setNumCoins2show] = useState(20)
  const [button, setButton] = useState(false)

  const updateSearch = (value) => {
    setSearch(value)
  }

  const handleSearchClick = (_) => {
    setButton(!button)
  }

  const handleLoadMoreClick = () => {
    setNumCoins2show(Math.min(numCoins2show + 20, props.maxCoins))
  }

  const handleLoadLessClick = () => {
    setNumCoins2show(Math.max(numCoins2show - 20, 20))
  }

  const handleSearchEnter = (event) => {
    if (event.key === "Enter")
    {
      setButton(!button)
    }
  }

  useEffect(() => {

    let arr = props.coins.filter((coin) => coin.id.includes(search))

    if (arr.length > numCoins2show)
    {
      arr = arr.slice(0, numCoins2show)
    }

    setCoins2show(arr)

    if (numCoins2show >= props.maxNumCoins)
    {
      document.getElementById('load-more-button').style.display = 'none'
    }
    else
    {
      document.getElementById('load-more-button').style.display = 'block'
    }

    if (numCoins2show <= 20)
    {
      document.getElementById('load-less-button').style.display = 'none'
    }
    else
    {
      document.getElementById('load-less-button').style.display = 'block'
    }

  }, [numCoins2show, props, button])

  return (
    <div className='container'>
      <div>
        <div className='input-wrapper'>
          <input
            placeholder="Search for a coin..."
            value={search}
            onChange={(e) => updateSearch(e.target.value) }
            onKeyPress={(e) => handleSearchEnter(e)}
          />

          <FaSearch
            id="search-icon"
            onClick={() => handleSearchClick()}
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


        <div className="buttons">

          <div
            id="load-less-button"
            onClick={() => handleLoadLessClick()}
          >
            Load Less
          </div>

          <div
            id="load-more-button"
            onClick={() => handleLoadMoreClick()}
          >
            Load More
          </div>

        </div>

      </div>
    </div>
  )
}

export default Coins;
