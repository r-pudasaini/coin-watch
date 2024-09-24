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

  const [coins, setCoins] = useState([])  // the coin data we pass to the Coin route
  const [coinSearch, setCoinSearch] = useState("")  // filters which coins we fetch for the client.
  const [pageSearch, setPageSearch] = useState("")  // filters which coins we fetch for the client.
  const [button, setButton] = useState(false) // detects whether the search button has been pressed
  const [coinsPerPage, setCoinsPerPage] = useState(20)  // number of coins to show per-page
  const [pageNum, setPageNum] = useState(1)     // the current page number. 


  useEffect(() =>
  {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${coinsPerPage}&page=${pageNum}`
      axios.get(url).then((response) => {
        const c = response.data.filter((coin) => coin.id.includes(coinSearch))
        setCoins(c)
      }).catch((error) => {
        console.log(error)
      })
  }, [coinsPerPage, pageNum, button])


  // triggers when the user hits enter in the coin search
  const handleSearchPress = (event) => {
    if (event.key === "Enter")
    {
      setButton(!button)
    }
  }

  //triggers when the user hits enter in the page number form
  const handlePageNumPress = (event) => {
    if (event.key === "Enter")
    {
      pageNumHandler(Number(pageSearch))
    }
  }

  // triggers when the user changes their coins-per-page by clicking an option in the list.
  const perPageHandler = (number) => {
    if (number !== coinsPerPage)
    {
      setCoinsPerPage(number)
    }
  }

  // changes when the user changes their page number by typing a new page number OR when the click the button.
  const pageNumHandler = (number) => {

    if (number !== Number.NAN && number >= 1 && number < allPages)
    {
      setPageNum(number)
    }
  }

  return (
    <div className='container'>

      <div>
        <div className='input-wrapper'>
          <input
            placeholder="Search for a coin..."
            value={coinSearch}
            onChange={(e) => setCoinSearch(e.target.value) }
            onKeyPress={(e) => handleSearchPress(e)}
          />

          <FaSearch
            id="search-icon"
            onClick={() => {setButton(!button)}}
          />
        </div>

        <div className="pagination">

          <div className="elements-per-page">
            <div className="elements-view">
              Showing <span>{coinsPerPage}</span> coins per-page
                <ul className="elements-dropdown">
                  <li onClick={() => {perPageHandler(5)}}> 5 </li>
                  <li onClick={() => {perPageHandler(10)}}> 10 </li>
                  <li onClick={() => {perPageHandler(20)}}> 20 </li>
                  <li onClick={() => {perPageHandler(50)}}> 50 </li>
                  <li onClick={() => {perPageHandler(100)}}> 100 </li>
                </ul>
            </div>
          </div>

          <div className="change-page-number">
            <FiChevronsLeft className="chev" onClick={() => pageNumHandler(1)}/>
            <FiChevronLeft className="chev margin-image" onClick={() => pageNumHandler(pageNum - 1)}/>

            <input
              placeholder={"Page: " + pageNum + "/" + allPages }
              value={pageSearch}
              onChange={(e) => setPageSearch(e.target.value) }
              onKeyPress={(e) => handlePageNumPress(e) }
            />

            <FiChevronRight className="chev margin-image" onClick={() => pageNumHandler(pageNum + 1)}/>
            <FiChevronsRight className="chev margin-image" onClick={() => pageNumHandler(allPages - 1)}/>
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
