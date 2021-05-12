import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Transition from './Transition'

//import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'
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
      <div className={`pages p-${location} `}>
        <Transition location = {location}>
          {children}
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
