import React, { useContext } from 'react'
import Helmet from 'react-helmet'

import Transition from './transitionPage'
import Header from './header'
import icon from '../../images/icon-32x32.ico'
import './layout.css'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

const Layout = ({children,location}) => {

  const {transitionNav, setTransitionNav} = useContext(GlobalStateContext)

  const stateTransitionNav = { transitionNav, setTransitionNav}

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <Transition location={location} stateTransitionNav={stateTransitionNav}>
        {children}
      </Transition>
    </>
  )
}

export default Layout
