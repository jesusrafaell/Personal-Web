import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Transition  } from 'react-transition-group'
import { Power3, gsap } from "gsap";

//import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'
import icon from '../../images/icon-32x32.ico'
import './layout.css'
import './pruebaTransition.css'

const Layout = ({children,location}) => {

  /*
  const onEnter = item => {
    console.log(item)
    gsap.from(
      [item.children[0].firstElementChild, item.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: Power3.InOut,
        opacity: 0,
        stagger: {
          amount: 0.2
        }
      }
    );
  };


  const onExit = item => {
    console.log(item)
    gsap.to(
      [item.children[0].firstElementChild, item.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: Power3.InOut,
        stagger: {
          amount: 0.2
        }
      }
    );
  };
  */

  const entering= () => {
    //console.log('entering')
    return { 
      opacity: 0,
      top: '45px',
      width: '200px',
      maxHeight: '200px',
    }
  } 

  const entered= () => {
    //console.log('enteredd')
    return { 
      transition: `opacity ${500}ms ease-in-out`,
      opacity: 1
    }
  } 

  const exiting= () => {
    //console.log('exiting')
    return { 
      transition: `all ${500}ms ease-in-out`,
      opacity: 0
    }
  }

  const exited= () => {
    //console.log('exited')
    return { 
      transition: `all ${500}ms ease-in-out`,
      opacity: 1
    }
  } 

  const transitionStyles  = {
    entering: entering(),
    exiting: exiting(),
    entered: entered(),
    exited: exited(),
  };

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
        {/*<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />*/}
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location}/>
      <div className={`pages p-${location} `}>
      <Transition 
        key={location}
        in={true}
        out={true}
        timeout={{
            enter: 1000,
            exit: 500
        }}
        appear
      >
        {status => (
          <div className={`page page-${status}`} >
            {console.log(status, location)}
            {children}
          </div>
        )}
      </Transition>
      </div>
      <Footer location={location}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
