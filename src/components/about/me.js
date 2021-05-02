import * as React from "react"
import './me.css'
import image from '../../images/jesusrafaell.png'

const Me = () => (
  <div className="about-bg"> 
    <div className="photo">
        <img src={image} alt="jesusrafaell"/>
      <div className="glow-wrap">
        <i className="glow"></i>
      </div>
    </div>
    <div className="info">
      <h2 className="infoname">I'm Jesus Rafael</h2>
      <div className="descrip">
        <p>I'm a web designer and front-end developer from Venezuela.</p>
        <p></p>
      </div>
    </div>
  </div>
)

export default Me
