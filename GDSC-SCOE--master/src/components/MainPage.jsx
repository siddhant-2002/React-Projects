import React from 'react';
import Navbar from './Navbar';
import Content from './Content.jsx';
import Aim from './Aim.jsx';
import './mainpage.css';
import Footer from './Footer.jsx';
import Events from './Events.jsx';
import ValuePreposition from './ValuePreposition.jsx';


const MainPage = () => {
  return (
    <div>
        <img className='redline' src="./images/redline.png" alt="" />
        <img className='blueline' src="./images/blueline.png" alt="" />
        
        <img className='square' src="./images/square.png" alt="" />

      <div>
        <div>
          <Navbar/>
        </div>


        <div>
          <Content/>
        </div>

        <div>
          <div>
            <Aim/>
          </div>
        </div>

        
      </div>
      <img className='yellowrectangle' src="./images/yellorectangle.png" alt="" />
      <img className='whiterectangle' src="./images/whiterectangle.png" alt="" />
      <img className='whitecircle' src="./images/white circle.png" alt="" />
      <img className='greencircle' src="./images/green circle.png" alt="" />

      <div>
        <ValuePreposition/>
      </div>

      <div>
        <Events/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainPage