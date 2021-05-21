import React, { useEffect } from 'react'
import { gsap, Power2, Power3 } from "gsap"
import '../styles/index.css'
import imgIndex from '../images/groot.png'

const IndexPage = () => {

  const letter = ['s1','s2','s3','s4','s5','s6','s7','s8', 'x1','x2','x3','x4','x5','x6','x7','x8', 'x9']

  const windowGlobal = typeof window !== 'undefined' && window

  const titileAnimation = () => {
    const maxH = windowGlobal.innerHeight / 3 
    const maxW = windowGlobal.innerWidth / 3 
    const min = 10
    const timeEffect = 3
    const shuffLetter = letter.sort((a, b) => 0.5 - Math.random());
    gsap.from('#img', timeEffect - 0.1 , {
      y: '-90%',
      rotation: 180,
      ease: Power2.easeIn,
    })
    shuffLetter.forEach((acc) => {
      let sig = Math.random() < 0.5 ? -1 : 1
      let sig2 = Math.random() < 0.5 ? -1 : 1
      let auX = (Math.random() * maxW + min) * sig
      let auY = (Math.random() * maxH + min) * sig2
      let auxRo = (Math.random() * 100 + 1) * sig
      gsap.from(`#${acc}`, timeEffect , {
        rotation: auxRo,
        position: 'flex',
        y: `${auY}px`,
        x: `${auX}px`,
        ease: Power3.easeIn,
      })
    })
  }

  useEffect(() => {

    setTimeout(() => titileAnimation(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

  useEffect(() => {
      const container = document.querySelector(".containerIndex")
      const card = document.querySelector(".card")
      const title = document.querySelector(".containerTitle")
      const letter = document.querySelectorAll(".letter")

      container.addEventListener("mousemove", (e) => {
        const screenWidth = window.innerWidth / 2
        const screenHeight = window.innerHeight / 2
        let x = (e.clientX - screenWidth) * 0.025;
        let y = (screenHeight - (e.clientY + 13)) * 0.025;

        container.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)"
      });

      container.addEventListener("mouseover", () => {
//        title.style.transform = "translate3d(0,0,160px)"
      })

  }, [])

  return(
    <div className="indexPage">
      <div className='containerIndex'>
        <div className="card">
          <div className="card-bg cursorEffect" >
            <img id="img" src={imgIndex} alt="" />
          </div>
          <div className="containerTitle cursorEffect">
            <h1 className="titlemain1" >
            <span id="s1" className="letter">F</span>
            <span id="s2" className="letter">R</span>
            <span id="s3" className="letter">O</span>
            <span id="s4" className="letter">N</span>
            <span id="s5" className="letter">T</span>
            <span id="s6" className="letter">E</span>
            <span id="s7" className="letter">N</span>
            <span id="s8" className="letter">D</span>
            </h1>
            <h1 className="titlemain2" >
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
        </div>
      </div>
    </div>
  )
}

export default IndexPage
