import React, {useState } from 'react'
import { Link }from 'gatsby'
import useScroll from '../../../hooks/useScroll'
import './nav.css'
import { navigate } from 'gatsby'

//import TransitionLink from 'gatsby-plugin-transition-link'

const Nav = ({siteTitle, location}) => { 

    const local = location === '/' ? 'index' : `${location.substring(1, location.length - 1)}`

    const [navOpen, setnavOpen] = useState(false)
    
    const { scrollY } = useScroll()

    const [scrollYOld, setscrollYOld] = useState(scrollY);

    const handleClick = () => {
        setscrollYOld(scrollY)
        if(navOpen)
            setnavOpen(false)
        else
            setnavOpen(true)
    }

    const handleScrollY = e => {
        if(`${location}`=== e.target.name){
            window.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 1s ease' })
            return true
        }else{
            return false 
        }
    }

    const handleClickNav= e =>{
        e.preventDefault()
        if(handleScrollY(e)){
            return
        }else{
            if(navOpen){
                setnavOpen(false)
            }
            //setTimeout(() => navigate(`${e.target.name}`), 1000)
            navigate(`${e.target.name}`)
        }
    }

    const handleNavOpen = () => {
        if(navOpen){
            if(scrollYOld === scrollY){
                return true
            }else{
                setscrollYOld(scrollY)
                setnavOpen(false)
                return false
            }
        }else{
            return false
        }
    }

    return(
        <nav className={`nav nav-${local} ${ scrollY > 10 && 'affix'}`}>
            <div className="navtitle">
                <Link 
                    to="/" 
                    name="/"
                    activeStyle={{ cursor: "default" }} 
                    onClick={handleClickNav}
                >{siteTitle}</Link>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <Link
                            to="/about/"
                            name="/about/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >About Me
                        </Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link
                            to="/software/"
                            name="/software/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >Software</Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link 
                            to="/contact/"
                            name="/contact/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >Contact</Link>
                    </li>
                </ul>
            </div>
            <span 
                aria-hidden="true" 
                className={`navTrigger ${ navOpen && 'active'}`} 
                onClick={handleClick}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </nav>
    )
}  

export default Nav
