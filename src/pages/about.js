import React  from 'react'

import mePhoto from '../images/jesusrafaell.png'
import useScroll from '../hooks/useScroll'
import '../styles/about.css'

const About = () => {

  const { scrollY } = useScroll()

  return (
    <div className="about-bg"> 
      <div id="info" className={`cursorEffect info ${ (scrollY > 70) && 'hiddeninfo' }`}>
        <h2  className="infoname">I'm Jesus Rafael</h2>
        <div id="descrip" className="descrip">
          <p>I'm a web designer and front-end developer from Venezuela.</p>
          <p></p>
        </div>
        <div className="me-photo">
          <img src={mePhoto} alt="jesus" />
        </div>
      </div>
    </div>
  )
}

export default About
