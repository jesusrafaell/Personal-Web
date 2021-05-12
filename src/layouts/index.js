import React from 'react'
import Helmet from 'react-helmet'
import TransitionPage from '../components/layout/TransitionPage'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import icon from '../images/icon-32x32.ico'
import '../components/layout/layout.css'

const Layout = ({children,location}) => {

  return (
    <>
      <Helmet>
        <title>Jesus Rafaell</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <Header siteTitle={`JesusRafaell`} location={location.pathname}/>
      <div className={`pages p-${location} `}>
        <TransitionPage location = {location}>
          {children}
        </TransitionPage>
      </div>
      <Footer location={location}/>
    </>
  )
}

export default Layout
