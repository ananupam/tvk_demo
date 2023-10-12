import React from 'react';
import './RecentNewsletter.css'

const RecentNewsletter = () => {
  return (
    <div>
        <div className='recent_newsletter'>
            <div className='infinity_scroller_layer1'>
                <ul className="dynamic_content1">
                    <li><span> SLIDER 1 slide slide slide SLIDER 1 slide slide slide
                    SLIDER 2 slide slide slide SLIDER 1 slide slide slide</span></li> 
                    <li><span>SLIDER 2 slide slide slide SLIDER 1 slide slide slide
                    SLIDER 2 slide slide slide SLIDER 1 slide slide slide</span>  </li> 
                </ul>
            </div>
            <div className='infinity_scroller_layer2'>
                <ul className="dynamic_content2">
                    <li><span> SLIDER 1</span></li> 
                    <li><span>SLIDER 2</span>  </li> 
                    <li><span> SLIDER 3</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RecentNewsletter