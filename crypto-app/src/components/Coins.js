import React, {useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import { FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight  } from "react-icons/fi";


const Coins = (props) =>
{

  let allPages = 100

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  const [button, setButton] = useState(false)
  const [coinsPerPage, setCoinsPerPage] = useState(40)
  const [pageNum, setPageNum] = useState(1)


  useEffect(() =>
  {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${coinsPerPage}&page=${pageNum}`
      axios.get(url).then((response) => {
        const c = response.data.filter((coin) => coin.id.includes(search))
        setCoins(c)
      }).catch((error) => {
        console.log(error)
      })
  }, [coinsPerPage, pageNum, button])


  const updateSearch = (value) => {
    setSearch(value)
  }

  const handleClick = () => {
    setButton(!button)
  }

  const handleKey = (event) => {
    if (event.key === "Enter")
    {
      setButton(!button)
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

        <div className="pagination">

          <div className="elements-per-page">
            <div className="elements-view"> 
              Showing <span>{coinsPerPage}</span> coins per-page
                <ul className="elements-dropdown">
                  <li> 5 </li>
                  <li> 10 </li>
                  <li> 20 </li>
                  <li> 50 </li>
                  <li> 100 </li>
                </ul>
            </div>
          </div>

          <div className="change-page-number">
            <FiChevronsLeft />
            <FiChevronLeft className="margin-image"/>

            <input
              placeholder={pageNum + "/" + allPages}
              value={search}
              onChange={(e) => updateSearch(e.target.value) }
              onKeyPress={(e) => handleKey(e)}
            />

            <FiChevronRight className="margin-image"/>
            <FiChevronsRight className="margin-image"/>
          </div>

        </div>

        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24 hr</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>

        {/*        {coins.map(coin => {
            return (

            )
        })}

        */}

        {coins.map(coin => {
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
