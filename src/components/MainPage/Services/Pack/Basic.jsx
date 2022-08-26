import React from 'react'
import './Basic.css'


function Basic() {
  return (
    <div className='basic' style={{ marginTop: '60px', width: '100%' }}>
      <div className='imgBasic'>
        <img src='http://localhost:3000/static/media/s1.0a22d0af2ac46f402f41.png' alt="" />
      </div>

      <div className='containerBasic'>

        <div id="price">
          <div class="plan">
            <div class="plan-inner">
              <div class="entry-title">
                <h3>Basic Pack</h3>
                <div class="price">$10<span>STA</span>
                </div>
              </div>
              <div class="entry-content">
              <ul style={{ padding: '3px 6px 3px 8px' ,textAlign: 'left',marginLeft: '30px'}}>
                  <li> <i style={{ color: 'green' }} class="fa-solid fa-check"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
                  <li> <i style={{ color: 'green' }} class="fa-solid fa-check"></i>  Lorem, ipsum dolor sit amet  adipisicing elit</li>
                  <li> <i style={{ color: 'green' }} class="fa-solid fa-check"></i>  Lorem, ipsum dolor sit   adipisicing elit</li>
                  <li> <i style={{ color: 'green' }} class="fa-solid fa-check"></i>  Lorem, ipsum  sit amet  adipisicing elit</li>

                </ul>
              </div>
              <div class="btn">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* <h2>Basic Pack</h2>
        <p>   <i style={{color: 'green'}} class="fa-solid fa-check"></i>  It is a long established fact Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>   <i style={{color: 'green'}} class="fa-solid fa-check"></i>  It is a long established fact Lorem ipsum dolor sit amet consectetur lorem.</p>
        <p>   <i style={{color: 'green'}} class="fa-solid fa-check"></i>  It is a long established fact Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>   <i style={{color: 'green'}} class="fa-solid fa-check"></i>  It is a long established faconsectetur adipisicing elit.</p>


        <p className='money' >1 STA</p>

        <button style={{marginLeft: '350px'}} className="cv-btn">Buy</button> */}



      </div>
    </div>
  )
}

export default Basic


