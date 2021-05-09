import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = ({siteTitle, location}) => { 

    const windowGlobal = typeof window !== 'undefined' && window

    const [scrollmode, setScrollMode] = useState(false)
    const [navOpen, setnavOpen] = useState(false)

    const handleNav = useCallback( () => {
        if(windowGlobal.scrollY > 100){
            setScrollMode(true) 
        }else{
            setScrollMode(false)
        }
        //close menunav when scroll
        setnavOpen(false) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )

    useEffect(() => {
        windowGlobal.addEventListener("scroll", handleNav)
        return () => {
            windowGlobal.removeEventListener("scroll", handleNav)
        }
    },[handleNav, windowGlobal])


    const handleClick = () => {
        if(navOpen)
            setnavOpen(false)
        else
            setnavOpen(true)
    }

    const handleClickScroll= (op, e) =>{
        if(location === 'index' && op === 'title'){
            e.preventDefault()
        }else if(location === 'about' && op === 'about'){
            e.preventDefault()
        }else if(location === 'software' && op === 'software'){
            e.preventDefault()
        }else if(location === 'contact' && op === 'contact'){
            e.preventDefault()
        }else{
            return;
        }
        windowGlobal.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 1s ease' })
    }

    return(
        <nav className={`nav ${location} ${ scrollmode && 'affix'}`}>
            <div className="navtitle">
                <Link to="/" activeStyle={{ cursor: "default" }} onClick={(e) => handleClickScroll('title',e)}>{siteTitle}</Link>
            </div>
            <div className={`mainListDiv main_list ${ navOpen && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <Link to="/about"
                            onClick={(e) => handleClickScroll('about',e)}
                            activeClassName="selected"
                        >About</Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link to="/software"
                            onClick={(e) => handleClickScroll('software',e)}
                            activeClassName="selected"
                        >Software</Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link to="/contact"
                            onClick={(e) => handleClickScroll('contact',e)}
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
