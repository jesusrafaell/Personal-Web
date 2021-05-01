import * as React from "react"
import PropTypes from "prop-types"
import Nav from './nav/nav'

const Header = ({ siteTitle }) => (
  <header>
    <Nav 
      siteTitle={`JesusRafaell`}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `JesusRafaell`,
}

export default Header
