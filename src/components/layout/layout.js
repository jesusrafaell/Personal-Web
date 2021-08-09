import React, { useContext, useEffect } from 'react'
import Helmet from 'react-helmet'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import icon from '../../images/icons/icon-32x32.ico'
import Transition from '../pageTransition'
import Cursor from './cursor/cursorNav'
import Header from './header'
import './layout.css'
import Footer from './footer'

const Layout = ({children,location}) => {

  //Go Top when relaod page
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const { 
    stateTransitionPage, 
    transitionNav, 
    setStateTransitionPage, 
    setTransitionNav
  } = useContext(GlobalStateContext)

  const stateTransitionNav = { transitionNav, setTransitionNav}
  const statePage = { stateTransitionPage, setStateTransitionPage}

  const local = location.pathname === '/' ?  'index' : `${location.pathname.substring(1, location.pathname.length - 1)}`

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Cursor location={location}/>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
        {children}
        <Footer location={location}/>
    </>
  )
}

/*
  <Transition location={location} stateTransitionNav={stateTransitionNav} statePage={statePage}>
    {children}
  </Transition>
*/
 
export default Layout
