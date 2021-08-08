import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

import useScroll from '../../hooks/useScroll'
import jesusAbout from '../../images/jesusAbout.png'

import '../../styles/about.css'

const AboutPage = ({handleScrollSkill, refe }) => {

   const textRef = useRef()

   const { scrollY } = useScroll()

   useEffect(() => {
      init(textRef.current, { 
         showCursor: true,
         strings: ["Developer.", "Designer."],
         startDelay: 500,
         backDelay: 2000,
         typeSpeed:  200,
         backSpeed:  100,
      })
   }, [])

   return (
      <div className="aboutPage">
         <div className="backPhoto"></div>
         <div id="info" className={`info ${ (scrollY > 70) && 'hiddeninfo' }`}>
           <div className="me-photo">
             <img src={jesusAbout} alt="jesusrafaell" className="cursorEffect"/>
           </div>
           <div id="descrip" className="descrip">
              <p id="line1"><span id="sub2">Hello</span>, My name is</p>
              <p><span id="sub1">Jesus Rafaell</span></p>
              <p>I'm a <span id="sub2">Web</span> <span  ref={textRef}></span></p>
           </div>
         </div>
         <div id="arrow" className="cursorEffect">
            <span className="arrowName">Skills</span>
            <span className="cursorEffect" onClick={() => handleScrollSkill(refe) }  onKeyDown={() => handleScrollSkill(refe) } aria-hidden="true">
              <div className="box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
         </div>
      </div>
   )
}

export default AboutPage
