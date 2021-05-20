import React from 'react'
import { TransitionGroup, Transition as ReactTransition, } from "react-transition-group"
import { Power3, gsap } from "gsap";
import Footer from './footer'

const transitionPage = ({children, location, stateTransitionNav, statePage}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  const onEnter = node => {
    statePage.setStateTransitionPage({
      ...statePage.stateTransitionPage,
      on: true
    })

    const childrenNode = [node.children[0].firstElementChild, node.children[0].lastElementChild]

    const t1 = gsap.timeline({ repeat: false })
    gsap.set(".page", { overflow: "hidden" })
    gsap.set(childrenNode, {
      opacity: 0,
      y: 60,
      delay: 0,
      duration: 0,
      borderRadius: `10rem`,
    })

    if(local === 'index'){
      gsap.set(node, {
        x: '100%',
        ease: Power3.InOut,
        opacity: 0,
        stagger: {
          amount: 0.2
        },
        duration: 0
      })
      t1.to(node, {
        x: '0',
        ease: Power3.InOut,
        opacity: 1,
        stagger: {
          amount: 0.2
        },
        duration: 1.5
      })
      t1.add(() =>{
        statePage.setStateTransitionPage({
          on: false,
          end: local
        })
      })
    }
    else if(local === 'about'){
      t1.set(node, {
        y: '110%',
        ease: Power3.InOut,
        opacity: 0,
        stagger: {
          amount: 0.2
        },
        duration: 0
      })
      .add(() =>{
        statePage.setStateTransitionPage({
          on: false,
          end: local
        })
      }, 1.5)
      .to(node, {
        delay: 1,
        y: '0',
        ease: Power3.InOut,
        opacity: 1,
        stagger: {
          amount: 0.2
        },
        duration: 2
      })
    }
    else if (local === 'software'){
      t1.add(() =>{
        statePage.setStateTransitionPage({
          on: false,
          end: local
        })
      }, 2)
    }else if (local === 'contact'){
      t1.to(node, .5, {
        delay: 2,
      })
      .add(() =>{
        statePage.setStateTransitionPage({
          on: false,
          end: local
        })
      })
    }
    //Ready Page animation
    //children animation page
    if(local === 'index'){
      t1.to(childrenNode, {
          delay: 1,
          y: 0,
          opacity: 1,
          borderRadius: '0rem',
        }
      )
      .from('.containerIndex', 1, {
        left: '20%',
        width: '80%',
        background: 'black'
      })
    }else{
      t1.to(childrenNode, {
          delay: 0,
          y: 0,
          opacity: 1,
          borderRadius: '0rem',
          duration: 0.6
        }
      )
    } 
    //End aniamtion nav <- init in navbar
    if(local !== 'index' && window.innerWidth > 901){
     t1.to('.selected', .3, {
          height: 'auto',
          padding: '15px 30px',
          fontSize: '1.2em',
      })
      .to('.selected', .2, {
        delay: .5,
        border: '2px solid transparent',
      })
    }
    t1.to('.nav a', {
     // cursor: 'pointer',
      onComplete: (() =>
        stateTransitionNav.setTransitionNav(false)
      )
    })
    t1.set(".page", { overflow: "visible" })
  }

  const onExit = node => {

    const t1 = gsap.timeline({ repeat: false })

    if(local === 'index'){
      const letter = ['s1','s2','s3','s4','s5','s6','s7','s8','x1','x2','x3','x4','x5','x6','x7','x8', 'x9']
      const windowGlobal = typeof window !== 'undefined' && window
      const maxH = windowGlobal.innerHeight / 2
      const maxW = windowGlobal.innerWidth / 2
      const min = 50
      const shuffLetter = letter.sort((a, b) => 0.5 - Math.random());
      shuffLetter.forEach((acc,curr) => {
        let sig = Math.random() < 0.5 ? -1 : 1
        let sig2 = Math.random() < 0.5 ? -1 : 1
        let auX = (Math.random() * maxW + min) * sig
        let auY = (Math.random() * maxH + min) * sig2
        let auxRo = (Math.random() * 99 + 1) * sig
        gsap.to(`#${acc}`, 1, {
          delay: .7,
          rotation: auxRo,
          position: 'flex',
          y: `${auY}%`,
          x: `${auX}%`,
          ease: Power3.easeOut,
        })
      })
      t1.to(node, {
        delay: 1.5,
        y: '-100%',
        ease: Power3.easeOut,
        display: 'none',
        stagger: {
          amount: 0.2
        },
        duration: 3
      })
    }

     else if(local === 'about'){
      t1.set(node, {
        zIndex: 7,
      })
      .to(node, {
        delay: 1.2,
        y: '110%',
        ease: Power3.easeOut,
        opacity: 0,
        display: 'none',
        stagger: {
          amount: 0.2
        },
        duration: 2
      })
    }
    else{
      t1.to(node, {
        delay: 1.2,
        background: 'black',
        x: '-100%',
        ease: Power3.easeOut,
        opacity: 0,
        display: 'none',
        stagger: {
          amount: 0.2
        },
        duration: 2
      })
    }

    t1.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        delay: 1,
        y: -50,
        scaleX: -0.1, 
        ease: Power3.InOut,
        autoAlpha: 0,
        stagger: {
          amount: 0.2
        }
      }
    )
  }

  return (
    <>
      <div className='page-transition-black'></div>
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: 3000,
            exit: 3000
          }}
          onEntering={onEnter}
          onExit={onExit}
          appear
        >
          <div className={` page page-${local}`}>
            {children}
            {(local !== 'software') ?
              <Footer location={location} className="Footer"/>
              :
              null
            }
          </div>
        </ReactTransition>
      </TransitionGroup>
    </>
  )
}

export default transitionPage
