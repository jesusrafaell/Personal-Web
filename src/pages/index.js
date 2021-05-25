import React, {useState, useEffect, useContext, useRef, useMemo } from 'react'
import { gsap, Power3 } from "gsap"
import '../styles/index.css'
import groot from '../images/groot.png'
import useScroll from '../hooks/useScroll'

import { GlobalStateContext } from '../context/GlobalContextProvider'

const IndexPage = () => {

  const [positions, setPositions] = useState({})
  const [transTitle, setTransTitle] = useState({
    on: true,
    for: '',
  })

  const { 
    setStateTransitionPage, 
  } = useContext(GlobalStateContext)
  const { scrollY } = useScroll()

  const letter = ['s1','s2','s3','s4','s5','s6','s7','s8', 'x1','x2','x3','x4','x5','x6','x7','x8', 'x9']

  const isMobile = () => {
      const ua = navigator.userAgent;
      return /Android|Mobi/i.test(ua);
  }

  const randomN = (max, min) => {
    const sig = Math.random() < 0.5 ? -1 : 1
    const num = (Math.random() * max + min) * sig
    return num
  }

  const [effectComplete, setEffectComplete] = useState(false)

  const [restartTime, setRestartTime] = useState(false) 

  const tm = useMemo(() => gsap.timeline({paused: true, onReverseComplete:() => setEffectComplete(true)}) , [restartTime])

  useEffect(() => {
    let maxH = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerHeight/4
    let maxW = window.innerWidth > window.innerHeight ? window.innerWidth/2 : window.innerWidth/4
    let min = window.innerWidth > window.innerHeight ? 40 : 20
    let s = (typeof navigator !== "undefined" && isMobile()) ? 1.2 : 0.5
    tm.to(letter.map(i => '#' + i), 0.8, {
      scale: s, 
      x: () => {
        return `${randomN(maxW, min)}%`
      },
      y: () => {
        let aux = randomN(maxH, min)
        if(maxH > maxW && aux < 0){
          return `${aux/2}%`
        }else{
          return `${aux}%`
        }
      },
      rotation: () => {
        return randomN(100, 1)
      },
      ease: Power3.easeOut, 
      onComplete:() => {
        setEffectComplete(false)
      }
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[tm])

  useEffect(() => {
    if(transTitle.on){
      setRestartTime(!restartTime)
      return
    }
    if(scrollY >= 70){
      //console.log('play')
      tm.play()
      setEffectComplete(false)
    }else if(scrollY < 70 && setEffectComplete) {
      tm.reverse()
     // console.log('reverse')
      if(effectComplete){
        setRestartTime(!restartTime)
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  useEffect(() => {
    const maxH = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerHeight/4
    const maxW = window.innerWidth > window.innerHeight ? window.innerWidth/2 : window.innerWidth/4
    const min = window.innerWidth > window.innerHeight ? 40 : 20
    createRandomList(maxH, maxW, 20)
    const t1 = gsap.timeline()
    t1.set('#groot',{
      opacity: 0,
    })
    .from('.card-bg', 1.5, {
      delay: 2,
      opacity: 0,
      ease: Power3.easeIn,
      onComplete: ()=> {
        setTransTitle({
          ...transTitle,
          for: 'initial'
        })
        t1.to('#groot', {
          opacity: 1,
          onComplete: () => {
            setTransTitle({
              ...transTitle,
              on: false
            })
          }
        })
      }    
    })
    .add(gsap.delayedCall(2,
      () => {
        setStateTransitionPage({
          on: false,
          end: 'index'
        })
      }
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createRandomList = (maxH, maxW, min) => {
    letter.forEach((acc, curr) => {
      let x = randomN(maxW, min) 
      let y = randomN(maxH, min) 
      let r = randomN(100, 1) 
      let style = [x, y, r]
      setPositions(state => ({
        ...state,
        [acc] : style
      }))
    })
  }

  const letterStyle = (acc) =>{
    if(!transTitle.on)
      return
    if(transTitle.for === ''){
      return AnimationTitleOn(acc, 0)
    }else if(transTitle.for === 'initial'){
      return AnimationTitleOff(2)
    }
  }

  const AnimationTitleOn = (acc, time) => {
    if(Object.keys(positions).length < 1)
      return
    const [x, y, r] = positions.[acc]
    return {
      transition: `all ${time}s linear`,
      transform: `
      translate(${x}%,${y}%) 
      rotate(${r}deg)
      scale(0.5)
      `
    }
  }

  const AnimationTitleOff = (time) =>{
    return {
      transition: `${time}s ease-in`,
      transform: `
      translate(0,0) 
      rotate(0deg)
      scale(1)
      `
    }
  }

  useEffect(() => {
    const indexPage = document.querySelector(".indexPage")
    const container = document.querySelector(".containerIndex")
    indexPage.addEventListener("mousemove", e => {
      const screenWidth = window.innerWidth / 2
      const screenHeight = window.innerHeight / 2
      let x = (e.clientX - screenWidth) * 0.02;
      let y = (screenHeight - (e.clientY + 13)) * 0.02;
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
            <span style={letterStyle('s1')} id="s1" className="letter">F</span>
            <span style={letterStyle('s2')} id="s2" className="letter">R</span>
            <span style={letterStyle('s3')} id="s3" className="letter">O</span>
            <span style={letterStyle('s4')} id="s4" className="letter">N</span>
            <span style={letterStyle('s5')} id="s5" className="letter">T</span>
            <span style={letterStyle('s6')} id="s6" className="letter">E</span>
            <span style={letterStyle('s7')} id="s7" className="letter">N</span>
            <span style={letterStyle('s8')} id="s8" className="letter">D</span>
            </h1>
            <h1 className="titlemain2" >
            <span style={letterStyle('x1')} id="x1" className="letter">D</span>
            <span style={letterStyle('x2')} id="x2" className="letter">E</span>
            <span style={letterStyle('x3')} id="x3" className="letter">V</span>
            <span style={letterStyle('x4')} id="x4" className="letter">E</span>
            <span style={letterStyle('x5')} id="x5" className="letter">L</span>
            <span style={letterStyle('x6')} id="x6" className="letter">O</span>
            <span style={letterStyle('x7')} id="x7" className="letter">P</span>
            <span style={letterStyle('x8')} id="x8" className="letter">E</span>
            <span style={letterStyle('x9')} id="x9" className="letter">R</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
