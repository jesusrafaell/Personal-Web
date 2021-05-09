import React, {useState, useEffect, useCallback} from 'react'
import Layout from '../components/layout/layout'
import '../styles/index.css'

const IndexPage = () => {

  const windowGlobal = typeof window !== 'undefined' && window

  const [hidden, setHidden] = useState(false)

  const handleScroll = useCallback( () => {
    if(windowGlobal.scrollY > 100){
      setHidden(true)
    } else{
      setHidden(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
  )

  useEffect(() => {
      windowGlobal.addEventListener("scroll", handleScroll)
      return () => {
          windowGlobal.removeEventListener("scroll", handleScroll)
      }
  },[handleScroll, windowGlobal])

  return(
    <Layout location='index'>
      <div className="indexPage">
        <h1 className={`titlemain ${ hidden && 'disabletitle' }`}>Welcome</h1>
        <div className="overlay"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
