import * as React from "react"
import Nav from './nav/nav'

const Header = ({siteTitle, location}) => (
  <header>
    <Nav 
      siteTitle={siteTitle}
      location={location}
    />
  </header>
)

export default Header
