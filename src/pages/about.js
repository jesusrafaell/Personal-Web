import React  from 'react'
import '../styles/about.css'
import useScroll from '../hooks/useScroll'

const About = () => {

  const { scrollY } = useScroll()

  return (
    <div className="about-bg"> 
      <div id="info" className={`info ${ (scrollY > 70) && 'hiddeninfo' }`}>
        <h2  className="infoname">I'm Jesus Rafael</h2>
        <div id="descrip" className="descrip">
          <p>I'm a web designer and front-end developer from Venezuela.</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default About
