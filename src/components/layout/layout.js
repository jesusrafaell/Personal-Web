import React from 'react'
import Helmet from 'react-helmet'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

//import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'
import icon from '../../images/icon-32x32.ico'
import './layout.css'

const Layout = ({children,location}) => {

  const timeout = 600
  const getTransitionStyles = {
    entering: {
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
    },
    exited: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  }

  const entering = e => {
    console.log('entering')
  }

  const entered = e => {
    console.log('entered')
  }


  const exiting = e => {
    console.log('exiting')
  }

  const exited = e => {
    console.log('exited')
  }
  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <div className={`pages p-${location} `}>
      <TransitionGroup>
          <ReactTransition
              key={location.pathname}
              timeout={{
                  enter: 1000,
                  exit: 500,
              }}
              onEntering={entering}
              onEntered={entered}
              onExiting={exiting}
              onExited={exited}
              unmountOnExit
          >
              {status => (
                  <div
                      style={{
                          ...getTransitionStyles[status],
                      }}
                  >
                      {console.log(location.pathname,status)}
                      {children}
                  </div>
              )}
          </ReactTransition>
      </TransitionGroup>
      </div>
      <Footer location={location}/>
    </>
  )
}

export default Layout
