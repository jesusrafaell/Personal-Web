import React from 'react'
import Helmet from 'react-helmet'

//import { useStaticQuery, graphql } from "gatsby"

import Transition from './transitionPage'
import Header from './header'
import icon from '../../images/icon-32x32.ico'
import './layout.css'

const Layout = ({children,location}) => {

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <Transition location={location}>
        {children}
      </Transition>
    </>
  )
}

export default Layout
