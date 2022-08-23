import React from 'react'
import { Link } from 'react-scroll'

const Subscribe = () => {
  return (
    <div id='subscribe' style={{backgroundColor:"#d3fd99"}}>
          <h3>Subscribe</h3>
          <div className='subscribe-input'> 
            <input type="email" placeholder="example@gmail.com"/>
            <Link to="#">Continue</Link>
          </div>
    </div>
  )
}

export default Subscribe