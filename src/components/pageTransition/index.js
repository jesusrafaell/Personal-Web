import React from 'react'
import { TransitionGroup, Transition as ReactTransition, } from "react-transition-group"
import { Power3, gsap } from "gsap";

import { aboutOnEnter, aboutOnExit } from './transitions/aboutTrans'
import { homeOnEnter, homeOnExit } from './transitions/indexTrans'
import Footer from '../layout/footer'

const transitionPage = ({children, location, stateTransitionNav, statePage}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  const onEnter = node => {
    statePage.setStateTransitionPage({
      ...statePage.stateTransitionPage,
      on: true,
    })
    //const childrenNode = [node.children[0].firstElementChild, node.children[0].lastElementChild]
    const t1 = gsap.timeline({ repeat: false })
    .set(".page", { overflow: "hidden" })
    if (local === 'index'){
      homeOnEnter(node, t1)
    }else if (local === 'about'){
      aboutOnEnter(node, t1)
    }else if (local === 'software'){
      t1.from(node, 1, {
        delay: 2,
        x: '-100%'
      })
    }else if (local === 'contact'){
      t1.from(node, 1, {
        delay: 2,
        scaleX: 0,
        x: '100%'
      })
    }
    //children animation page
    t1.call( () => {
      statePage.setStateTransitionPage({
        on: false,
        end: local
      })
    })
    
    if('software' !== local){
      t1.set('.footer', {
        opacity: 1
      })
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
      onComplete: () => {
        stateTransitionNav.setTransitionNav(false)
      }
    })
    .set(".page", { 
      delay: 1, 
      overflow: "visible" 
    })
  }

  const onExit = node => {
    const t1 = gsap.timeline({ repeat: false })
    .set('.footer', {
      opacity: 0
    })
    if(local === 'index'){
      homeOnExit(node, t1)
    }else if(local === 'about'){
      aboutOnExit(node, t1)
    }
    else{
      t1.to(node, {
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
    
    t1.to( [node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6,
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
            enter: 4000,
            exit: 3000
          }}
          onEntering={onEnter}
          onExit={onExit}
          appear
        >
          <div className={`page page-${local}`}>
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
