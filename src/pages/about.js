import React, {useState, useEffect, useCallback} from 'react'
import Layout from '../components/layout/layout'
import image from '../images/jesusrafaell.png'
import '../styles/about.css'

const About = () => {

  const windowGlobal = typeof window !== 'undefined' && window

  const [hidden, setHidden] = useState(false)

  const handleScroll = useCallback( () => {
    if(windowGlobal.scrollY > 70){
      setHidden(true)
    } else{
      setHidden(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
  )

  useEffect(() => {
      windowGlobal.addEventListener("scroll", handleScroll)
      return () => {
          windowGlobal.removeEventListener("scroll", handleScroll)
      }
  },[handleScroll, windowGlobal])

  return (
  <Layout location='about'>
    <div className="about-bg"> 
      <div id="photo" className={`photo ${ hidden && 'disablephoto' }`}>
          <img src={image} alt="jesusrafaell"/>
        <div className="glow-wrap">
          <i className="glow"></i>
        </div>
      </div>
      <div id="info" className={`info ${ hidden && 'hiddeninfo' }`}>
        <h2  className="infoname">I'm Jesus Rafael</h2>
        <div id="descrip" className="descrip">
          <p>I'm a web designer and front-end developer from Venezuela.</p>
          <p></p>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default About
