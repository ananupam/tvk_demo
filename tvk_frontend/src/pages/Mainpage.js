import React from 'react';
import './blobanimation.svg'; 
import './Mainpage.css'


const Mainpage = () => {
  return (
    <div>
      <div className='mainpage_container'>

        <div className='mainpage_text_container'>
          <div className='mainpage_heading'>KRISHNA CHATURVEDI</div>
          <div className='mainpage_subheading'>Career Strategist | Mentor | Growth Hacker | Job Coach  </div>
          <button className='mainpage_consult'>CONSULT</button>
        </div>

        <div className='mainpage_image_container'>
          <img src={require('./blobanimation.svg').default} alt="Blob SVG" />
          <div className='mainpage_image_bkg1'></div>
        </div>

      </div>
    </div>
  )
}


export default Mainpage