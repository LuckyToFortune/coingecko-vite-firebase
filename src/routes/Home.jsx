import React from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins = {coins}/>
      <Trending/>
    </div>
  )
}

export default Home