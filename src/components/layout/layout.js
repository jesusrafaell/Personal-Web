import React, { useContext } from 'react'
import Helmet from 'react-helmet'

import Transition from './transitionPage'
import Header from './header'
import icon from '../../images/icon-32x32.ico'
import './layout.css'
import Cursor from './cursor/cursorNav'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

const Layout = ({children,location}) => {

  const { 
    stateTransitionPage, 
    transitionNav, 
    setStateTransitionPage, 
    setTransitionNav} = useContext(GlobalStateContext)

  const stateTransitionNav = { transitionNav, setTransitionNav}
  const statePage = { stateTransitionPage, setStateTransitionPage}

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Cursor location={location}/>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <Transition location={location} stateTransitionNav={stateTransitionNav} statePage={statePage}>
        {children}
      </Transition>
    </>
  )
}

export default Layout
