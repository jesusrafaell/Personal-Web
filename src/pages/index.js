import React, {useState, useEffect } from 'react'
import { gsap, Power3 } from "gsap"
import '../styles/index.css'
import groot from '../images/groot.png'
import useScroll from '../hooks/useScroll'

const IndexPage = () => {

  const { scrollY } = useScroll()
  const [transTitle, setTransTitle] = useState({
    on: true,
    for: ''
  })

  const letter = ['s1','s2','s3','s4','s5','s6','s7','s8', 'x1','x2','x3','x4','x5','x6','x7','x8', 'x9']

  const effectIndex = () =>{
    const maxH = window.innerHeight / 3
    const maxW = window.innerWidth / 2
    const min = 40
    letter.forEach((acc) => {
      let sig = Math.random() < 0.5 ? -1 : 1
      let sig2 = Math.random() < 0.5 ? -1 : 1
      let auX = (Math.random() * maxW + min) * sig
      let auY = (Math.random() * maxH + min) * sig2
      let auxRo = (Math.random() * 100 + 1) * sig
      gsap.to(`#${acc}`, 1 , {
        scale: 0.3,
        rotation: auxRo,
        y: `${auY}px`,
        x: `${auX}px`,
        ease: Power3.easeOut,
        onComplete: () => {
          setTransTitle({
            ...transTitle,
            on: false,
            for: 'downScroll'
          })
        }
      })
    })
  }

  useEffect(() => {
    if(scrollY >= 50 && transTitle.on === false && transTitle.for !== 'downScroll'){
      effectIndex()
      setTransTitle({
        ...transTitle,
        on: true,
        for: 'downScroll'
      })
    }
    if(scrollY < 50 && transTitle.on === false && transTitle.for !== 'upScroll' && transTitle.for !== ''){
      setTransTitle({
        ...transTitle,
        on: true,
        for: 'upScroll'
      })
      letter.forEach((acc) => {
        gsap.to(`#${acc}`, 1.5 , {
          rotation: 0,
          scale: 1,
          y: 0,
          x: 0,
          ease: Power3.easeIn,
          onComplete: () => {
            setTransTitle({
              ...transTitle,
              on: false,
              for: 'upScroll'
            })
          }
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY])


  useEffect(() => {
    const t1 = gsap.timeline()
    titileAnimation()
    t1.set('.card-bg', {
      opacity: 0
    })
    t1.set('#groot', {
      opacity: 0
    })
    .from('.card-bg', 1.5, {
      delay: 2,
      scale: 0.8,
      y: '50%',
      opacity: 0,
      ease: Power3.easeIn,
      onComplete: ()=> {
        t1.to('#groot', 1,{
          opacity: 1
        })
      }    
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const titileAnimation = () => {
    const maxH = window.innerHeight / 2
    const maxW = window.innerWidth / 2
    const min = 10
    const timeEffect = 4
    letter.forEach((acc) => {
      let sig = Math.random() < 0.5 ? -1 : 1
      let sig2 = Math.random() < 0.5 ? -1 : 1
      let auX = sig > 0 ? (Math.random() * maxW + min) * sig : (Math.random() * maxW/2 + min) * sig
      let auY = (Math.random() * maxH + min) * sig2
      let auxRo = (Math.random() * 100 + 1) * sig
      gsap.from(`#${acc}`, timeEffect , {
        scale: 0.5,
        rotation: auxRo,
        y: `${auY}px`,
        x: `${auX}px`,
        ease: Power3.easeIn,
        onComplete: () => setTransTitle({
          ...transTitle,
          on: false,
        })
      })
    })
  }

  useEffect(() => {
    const indexPage = document.querySelector(".indexPage")
    const container = document.querySelector(".containerIndex")
    indexPage.addEventListener("mousemove", e => {
      const screenWidth = window.innerWidth / 2
      const screenHeight = window.innerHeight / 2
      let x = (e.clientX - screenWidth) * 0.03;
      let y = (screenHeight - (e.clientY + 13)) * 0.03;
      container.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)"
    });
  }, [])

  return(
    <div className="indexPage">
      <div className="containerIndex">
        <div className="card">
          <div className="card-bg" >
            <img id="groot" src={groot} alt="" className="groot"/>
          </div>
          <div className="containerTitle">
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
