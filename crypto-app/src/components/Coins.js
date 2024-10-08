import React, {useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import '../index.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const INCREMNT = 20
const MIN_COINS = 10

const Coins = (props) =>
{

  const [search, setSearch] = useState("")
  const [coins2show, setCoins2show] = useState(props.coins)
  const [numCoins2show, setNumCoins2show] = useState(MIN_COINS)
  const [button, setButton] = useState(false)

  const updateSearch = (value) => {
    setSearch(value)
  }

  const handleSearchClick = (_) => {
    setButton(!button)
  }

  const handleLoadMoreClick = () => {
    setNumCoins2show(numCoins2show + INCREMNT)
    setButton(!button)
  }

  const handleLoadLessClick = () => {
    setNumCoins2show(numCoins2show - INCREMNT)
    setButton(!button)
  }

  const handleSearchEnter = (event) => {
    if (event.key === "Enter")
    {
      setButton(!button)
    }
  }

  const setDisabled = (object) => {
    object.style['background-color'] = 'var(--disabled-background-color)'
    object.style['color'] = 'grey'
    object.style['cursor'] = 'default'
  }

  const setEnabled = (object) => {
    object.style['background-color'] = 'var(--default-background-color)'
    object.style['color'] = 'var(--default-text-color)'
    object.style['cursor'] = 'pointer'
  }

  useEffect(() => {

    let arr = props.coins.filter((coin) => coin.id.includes(search))
    let toShow =  Math.min(Math.max(numCoins2show, MIN_COINS), arr.length)

    if (toShow === arr.length)
    {
      document.getElementById('load-more-button').onclick = function() {void(0)};
      setDisabled(document.getElementById('load-more-button'))
    }
    else
    {
      document.getElementById('load-more-button').onclick = function() {handleLoadMoreClick()};
      setEnabled(document.getElementById('load-more-button'))
    }

    if (toShow <= MIN_COINS)
    {
      document.getElementById('load-less-button').onclick = function() {void(0)};
      setDisabled(document.getElementById('load-less-button'))
    }
    else
    {
      document.getElementById('load-less-button').onclick = function() {handleLoadLessClick()};
      setEnabled(document.getElementById('load-less-button'))
    }

    arr = arr.slice(0, toShow)
    setNumCoins2show(toShow)
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

        <div className="showing"> Showing {numCoins2show} Coins </div>

        <div className="buttons">

          <div
            id="load-less-button"
          >
            Load Less
          </div>

          <div
            id="load-more-button"
          >
            Load More
          </div>
        </div>


      </div>
    </div>
  )
}

export default Coins;
