import React, { useEffect } from 'react'
import '../styles/index.css'
import { gsap, Power2, Power3 } from "gsap";

const IndexPage = () => {

  const letter = ['s1','s2','s3','s4','s5','s6','s7','s8']
  const letter2 = ['x1','x2','x3','x4','x5','x6','x7','x8', 'x9']

  const maxH = window.innerWidth > 900 ? 300 : window.innerHeight
  const maxW = 500
  const min = 1
  const timeEffect = 3

  const titileAnimation = () => {
    const shuffLetter = letter.sort((a, b) => 0.5 - Math.random());
    const shuffLetter2 = letter2.sort((a, b) => 0.5 - Math.random());
    shuffLetter.forEach((acc,curr) => {
      let sig = Math.random() < 0.5 ? -1 : 1
      let sig2 = Math.random() < 0.5 ? -1 : 1
      let auX = (Math.random() * maxW + min) * sig
      let auY = (Math.random() * maxH + min) * sig2
      let auxRo = (Math.random() * 100 + 1) * sig
      gsap.from(`#${acc}`, timeEffect , {
        rotation: auxRo,
        position: 'flex',
        y: `${auY}%`,
        x: `${auX}%`,
        ease: Power3.easeIn,
      })
    })
    shuffLetter2.forEach((acc,curr) => {
      let sig = Math.random() < 0.5 ? -1 : 1
      let sig2 = Math.random() < 0.5 ? -1 : 1
      let auX = (Math.random() * maxW + min) * sig
      let auY = (Math.random() * maxH + min) * sig2
      let auxRo = (Math.random() * 100 + 1) * sig
      gsap.from(`#${acc}`, timeEffect, {
        rotation: auxRo,
        ease: Power2.easeIn,
        y: `${auY}%`,
        x: `${auX}%`,
      })
    }) 
  }

  useEffect(() => {
    setTimeout(() => titileAnimation(), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className="indexPage">
      <div className="contenterIndex">
        <h1 className='titlemain' >
        <span id="s1" className="letter">F</span>
        <span id="s2" className="letter">R</span>
        <span id="s3" className="letter">O</span>
        <span id="s4" className="letter">N</span>
        <span id="s5" className="letter">T</span>
        <span id="s6" className="letter">E</span>
        <span id="s7" className="letter">N</span>
        <span id="s8" className="letter">D</span>
        </h1>
        <h1 className='titlemain2' >
        <span id="x1" className="letter">D</span>
        <span id="x2" className="letter">E</span>
        <span id="x3" className="letter">V</span>
        <span id="x4" className="letter">E</span>
        <span id="x5" className="letter">L</span>
        <span id="x6" className="letter">O</span>
        <span id="x7" className="letter">P</span>
        <span id="x8" className="letter">E</span>
        <span id="x9" className="letter">R</span>
        </h1>
      </div>
      {/*
        <button onClick={handleAnimation} className="index-submit2">Animation</button>
        */}
    </div>
  )
}

export default IndexPage
