import React from 'react'
import { TransitionGroup, Transition as ReactTransition, } from "react-transition-group"
import { Power3, gsap } from "gsap";
import Footer from './footer'

const transitionPage = ({children, location}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  const onEnter = node => {
    const childrenNode = [node.children[0].firstElementChild, node.children[0].lastElementChild]
      if(window.innerWidth < 900) {
        gsap.fromTo(
          node,
          {
            y: '-100%',
            ease: Power3.InOut,
            autoAlpha: 0,
          },
          {
            delay: 1,
            y: '0',
            ease: Power3.InOut,
            autoAlpha: 1,
            stagger: {
              amount: 0.2
            },
            duration: 2,
          },
        )
          return
        }

    gsap.fromTo(
      node,
      {
        x: '100%',
        ease: Power3.InOut,
        autoAlpha: 0,
        stagger: {
          amount: 0.2
        },
      },
      {
        delay: .5,
        x: '0',
        ease: Power3.InOut,
        autoAlpha: 1,
        stagger: {
          amount: 0.2
        },
        duration: 2
        ,
      }
    )

    gsap.fromTo(
      childrenNode,
      {
        delay: 2,
        y: 30,
        opacity: 0,
        borderRadius: 10 + "rem",
        ease: Power3.InOut,
        stagger: {
          amount: 0.2
        }
      },{
        delay: 2,
        y: 0,
        opacity: 1,
        borderRadius: 0,
        duration: 0.6
      }
    )
  }

  const onExit = node => {
    gsap.to(
      node,
      1,
      {
        x: '-100%',
        ease: Power3.InOut,
        autoAlpha: 0,
        stagger: {
          amount: 0.2
        },
      }
    )

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
                  {status => (
                    <div className={`
                      page
                      page-${local}
                    `}
                    >
                      {children}
                      {local !== 'software' ? 
                        <Footer location={location}/>
                        :
                        null
                      }
                    </div>
                  )}
              </ReactTransition>
          </TransitionGroup>
        </>
    )
}

export default transitionPage
