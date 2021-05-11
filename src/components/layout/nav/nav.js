import React, {useState } from 'react'
import { Link }from 'gatsby'
import useScroll from '../../../hooks/useScroll'
import './nav.css'

//import TransitionLink from 'gatsby-plugin-transition-link'

const Nav = ({siteTitle, location, transitionStatus}) => { 

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

    const handleClickScroll= (e) =>{
        if(location === 'index' && e.target.name === 'index'){
            e.preventDefault()
        }else if(location === 'about' && e.target.name === 'about'){
            e.preventDefault()
        }else if(location === 'software' && e.target.name === 'software'){
            e.preventDefault()
        }else if(location === 'contact' && e.target.name === 'contact'){
            e.preventDefault()
        }else{
            return;
        }
        window.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 1s ease' })
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
        <nav className={`nav nav-${location} ${ scrollY > 10 && 'affix'}`}>
            <div className="navtitle">
                <Link 
                    to="/" 
                    name="index"
                    activeStyle={{ cursor: "default" }} 
                    onClick={handleClickScroll}
                >{siteTitle}</Link>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <Link
                            to="/about"
                            name="about"
                            onClick={handleClickScroll}
                            activeClassName="selected"
                        >About Me
                        </Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link
                            to="/software"
                            name="software"
                            onClick={handleClickScroll}
                            activeClassName="selected"
                        >Software</Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link 
                            to="/contact"
                            name="contact"
                            onClick={handleClickScroll}
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
