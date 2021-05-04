import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import icon from '../../images/icon-32x32.ico'
//import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({children,location}) => {

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location}/>
      <main>{children}</main>
      <Footer location={location}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
