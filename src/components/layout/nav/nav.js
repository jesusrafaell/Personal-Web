import React, {useState } from 'react'
import { Link } from 'gatsby'
import useScroll from '../../../hooks/useScroll'
import './nav.css'

const Nav = ({siteTitle, location}) => { 

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
        <nav className={`nav ${location} ${ scrollY > 100 && 'affix'}`}>
            <div className="navtitle">
                <Link to="/" activeStyle={{ cursor: "default" }} onClick={(e) => handleClickScroll('title',e)}>{siteTitle}</Link>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
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
