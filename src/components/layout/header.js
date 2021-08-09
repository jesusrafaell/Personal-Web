import React from 'react'
import Nav from './nav/nav'

const Header = ({siteTitle, location}) =>{

  const result = 
    location.substring(1, location.length-1) === '/' ?
    'index'
    :
    location.substring(1, location.length-1) 

  return (
    <header>
      <Nav 
        siteTitle={siteTitle}
        location={result}
      />
    </header>
  )
}

export default Header
