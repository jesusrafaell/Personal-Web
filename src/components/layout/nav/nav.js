import React, {useState } from 'react'
import useScroll from '../../../hooks/useScroll'
import TransitionLink from 'gatsby-plugin-transition-link'
import './nav.css'

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
        <nav className={`nav ${location} ${ scrollY > 100 && 'affix'}`}>
            <div className="navtitle">
                <TransitionLink 
                    to="/" 
                    name="index"
                    activeStyle={{ cursor: "default" }} 
                    onClick={handleClickScroll}
                    exit={{
                        length: 1
                    }}
                    entry={{}}
                >{siteTitle}</TransitionLink>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <TransitionLink
                            to="/about"
                            name="about"
                            onClick={handleClickScroll}
                            activeClassName="selected"
                            exit={{
                                length: 1
                            }}
                            entry={{}}
                        >About Me
                        </TransitionLink>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <TransitionLink
                            to="/software"
                            name="software"
                            onClick={handleClickScroll}
                            activeClassName="selected"
                            exit={{
                                length: 1
                            }}
                            entry={{}}
                        >Software</TransitionLink>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <TransitionLink 
                            to="/contact"
                            name="contact"
                            onClick={handleClickScroll}
                            activeClassName="selected"
                            exit={{
                                length: 1
                            }}
                            entry={{}}
                        >Contact</TransitionLink>
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
