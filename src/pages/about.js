import React  from 'react'
import Layout from '../components/layout/layout'
import image from '../images/jesusrafaell.png'
import '../styles/about.css'
import useScroll from '../hooks/useScroll'

const About = () => {

  const { scrollY } = useScroll()

  return (
  <Layout location='about'>
    <div className="about-bg"> 
      <div id="photo" className={`photo ${ (scrollY > 70) && 'disablephoto' }`}>
          <img src={image} alt="jesusrafaell"/>
        <div className="glow-wrap">
          <i className="glow"></i>
        </div>
      </div>
      <div id="info" className={`info ${ (scrollY > 70) && 'hiddeninfo' }`}>
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
