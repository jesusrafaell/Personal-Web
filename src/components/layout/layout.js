import React from 'react'
import Helmet from 'react-helmet'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import { Power3, gsap } from "gsap";

//import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'
import icon from '../../images/icon-32x32.ico'
import './layout.css'

const Layout = ({children,location}) => {

  const local = location.pathname === '/' ? 'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  console.log('Changeeeeeee------',local)

  const onEnter = node => {
   console.log('enter', local, node)
    if(window.innerWidth < 900) return
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
          x: '0%',
          ease: Power3.InOut,
          autoAlpha: 1,
          stagger: {
            amount: 0.2
          },
          duration: 2
          ,
        }
      );
      gsap.fromTo(
        [node.children[0].firstElementChild, node.children[0].lastElementChild],
        {
          scaleX: -0.1, 
          autoAlpha: 0,
          duration: 0
        },
        {
          delay: 1,
          y: 30,
          scaleX: 1, 
          ease: Power3.easeIn,
          autoAlpha: 1,
          stagger: {
            amount: 0.2
          },
          duration: 0.6,
        }
      );

  };

  const onExit = node => {
    console.log('exit', local, node)
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
    );

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
    );
  };

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <TransitionGroup>
          <ReactTransition
              key={location.pathname}
              timeout={1200}
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
                  {console.log(location.pathname,status)}
                  {children}
      <Footer location={location}/>
                </div>
              )}
          </ReactTransition>
      </TransitionGroup>
    </>
  )
}

export default Layout

                  //{console.log(location.pathname,status)}
