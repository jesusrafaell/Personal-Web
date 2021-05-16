import React from 'react'
import { TransitionGroup, Transition as ReactTransition, } from "react-transition-group"
import { Power3, gsap } from "gsap";
import Footer from './footer'

const transitionPage = ({children, location}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  const onEnter = node => {
    const childrenNode = [node.children[0].firstElementChild, node.children[0].lastElementChild]

    const t1 = gsap.timeline({ repeat: false })
    
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
      t1.set(".page-transition-black", {
        autoAlpha: 0,
      })
      t1.to(".page-transition-black", {
        autoAlpha: 1,
        zIndex: 7,
        duration: 2,
      })
      t1.to(".page-transition-black", {
        delay: 2,
        opacity: 0,
        zIndex: 0,
        duration: 2,
      })
   }

    if(local === 'about'){
      t1.set(node, {
        y: '100%',
        ease: Power3.InOut,
        opacity: 0,
        stagger: {
          amount: 0.2
        },
        duration: 0
      })
      t1.to(node, {
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

    t1.to(childrenNode, {
        delay: 0,
        y: 0,
        opacity: 1,
        borderRadius: '0rem',
        duration: 0.6
      }
    )

    t1.set(".footer",{
      display: 'flex'
    })
  }

  const onExit = node => {

    const t1 = gsap.timeline({ repeat: false })

    if(local === 'index'){
      t1.to(node, {
        opacity: 0,
        duration: 1
      })
    }

    if(local === 'about'){
      t1.set(node, {
        zIndex: 7,
      })
      t1.to(node, {
        delay: 1.2,
        y: '100%',
        ease: Power3.easeOut,
        opacity: 1,
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
        y: -30,
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
            exit: 2000
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
