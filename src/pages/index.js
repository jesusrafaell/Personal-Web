import React from 'react'
import Layout from '../components/layout/layout'
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
    <Layout location='index'>
      <div className="indexPage">
          <h1 className={`titlemain ${ checkHidden(100) && 'disabletitle' }`}>Welcome</h1>
          <div className="overlay"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
