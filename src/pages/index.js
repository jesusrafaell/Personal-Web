import React from 'react'
import useScroll from '../hooks/useScroll'
import '../styles/index.css'
//import Seo from '../components/seo'

const IndexPage = () => {

  const { scrollY } = useScroll()

  const checkHidden = (ref) => {
    if(scrollY > ref)
      return true
    else 
      return false
  }

  return(
    <div className="indexPage">
        <h1 className={`titlemain ${ checkHidden(100) && 'disabletitle' }`}>Welcome</h1>
        <div className="overlay"></div>
    </div>
  )
}

export default IndexPage
