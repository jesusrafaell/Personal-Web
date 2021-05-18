import React from 'react'
import { TransitionGroup, Transition as ReactTransition, } from "react-transition-group"
import { Power3, gsap } from "gsap";
import Footer from './footer'

const transitionPage = ({children, location}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`
  const delaying = 2;

  const onEnter = node => {
    const childrenNode = [node.children[0].firstElementChild, node.children[0].lastElementChild]


    const t1 = gsap.timeline({ repeat: false })
    t1.set(".page", { overflow: "hidden" })
    
    t1.set(".footer",{
      display: 'none'
    })

    gsap.set(childrenNode, {
      opacity: 0,
      y: 60,
      delay: 0,
      duration: 0,
      borderRadius: `10rem`,
    })

    if(local === 'index'){
      t1.to(node, 0.4, {
        delay: 2
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
      .to(node, {
        delay: 3,
        y: '0',
        ease: Power3.InOut,
        opacity: 1,
        stagger: {
          amount: 0.2
        },
        duration: 2
      })
    }
    else{
      t1.to(node, .5, {
        delay: 2,
      })
    }


    t1.to(childrenNode, {
        delay: 0,
        y: 0,
        opacity: 1,
        borderRadius: '0rem',
        duration: 0.6
      }
    )
    //End aniamtion nav <- init in navbar
    if(local !== 'index' && window.innerWidth > 901){
     t1.to('.selected', .2, {
          height: 'auto',
          padding: '15px 30px',
          fontSize: '1.2em',
      })
      .to('.selected', .5, {
          border: '2px solid transparent',
      });
    }
    t1.to(".footer",{
      delay: delaying,
      display: 'flex'
    })
    .set(".page", { overflow: "visible" })
  }

  const onExit = node => {

    const t1 = gsap.timeline({ repeat: false })

    t1.set(".footer",{
      display: 'none'
    })

    if(local === 'index'){
      const letter = ['s1','s2','s3','s4','s5','s6','s7','s8','x1','x2','x3','x4','x5','x6','x7','x8', 'x9']
      const maxH = window.innerWidth > 900 ? 300 : window.innerHeight
      const maxW = 500
      const min = 1
      const shuffLetter = letter.sort((a, b) => 0.5 - Math.random());
      shuffLetter.forEach((acc,curr) => {
        let sig = Math.random() < 0.5 ? -1 : 1
        let sig2 = Math.random() < 0.5 ? -1 : 1
        let auX = (Math.random() * maxW + min) * sig
        let auY = (Math.random() * maxH + min) * sig2
        let auxRo = (Math.random() * 99 + 1) * sig
        gsap.to(`#${acc}`, 1, {
          rotation: auxRo,
          position: 'flex',
          y: `${auY}%`,
          x: `${auX}%`,
          ease: Power3.easeOut,
        })
      })

      t1.set(node, {
        zIndex: 7,
      })
      .to(node, {
        delay: 1.2,
        y: '-110%',
        ease: Power3.easeOut,
        display: 'none',
        stagger: {
          amount: 0.2
        },
        duration: 2
      })
    }

    if(local === 'about'){
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

    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        delay: 2,
        y: -50,
        scaleX: -0.1, 
        ease: Power3.InOut,
        autoAlpha: 0,
        stagger: {
          amount: 0.2
        }
      }
    )
    t1.to(".footer",{
      delay: delaying,
      display: 'flex'
    })
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
              <Footer location={location} className="hiddenFooter"/>
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
