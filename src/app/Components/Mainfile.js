import React from 'react'
import Home from './home/Home'
import MiniNavbar from './navbar/MiniNavbar'
import Offer from './offers/Offer'
import Products1 from './Products1/Products1'
import Recommented from './recommented/Recommented'
import Request from './request/Request'

const Mainfile = () => {
  return (
    <div>
      <MiniNavbar/>
      <Home/>
      <Offer/>
      <Products1/>
      <Request/>
      <Recommented/>
    </div>
  )
}

export default Mainfile
