import React from 'react'
import useScroll from '../../hooks/useScroll'
import jesusAbout from '../../images/jesusAbout.png'

import '../../styles/about.css'

const AboutPage = () => {
   const { scrollY } = useScroll()
   return (
      <div className="aboutPage">
         <div className="backPhoto"></div>
         <div id="info" className={`info ${ (scrollY > 70) && 'hiddeninfo' }`}>
           <div className="me-photo">
             <img src={jesusAbout} alt="jesusrafaell" className="cursorEffect"/>
           </div>
           <div id="descrip" className="descrip">
             <p>I'm a web designer and front-end developer from Venezuela.</p>
           </div>
         </div>
      </div>
   )
}

export default AboutPage
