import  {useState, useEffect } from 'react'

const useScroll = () => {

  const windowGlobal = typeof window !== 'undefined' && window

  const [scrollY, setScrollY] = useState(windowGlobal.scrollY)

  useEffect(() => {
    const handleScroll = e => {
      setScrollY(windowGlobal.scrollY)
    }
      windowGlobal.addEventListener("scroll", handleScroll)
      return () => {
          windowGlobal.removeEventListener("scroll", handleScroll)
      }
  },[windowGlobal])

  return {
    scrollY,
  } 
}

export default useScroll
