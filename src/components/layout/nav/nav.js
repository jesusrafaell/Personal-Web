import React, { useState, useContext } from 'react'
import { Link, navigate }from 'gatsby'
import { gsap } from 'gsap'

import { GlobalStateContext } from '../../../context/GlobalContextProvider'

import useScroll from '../../../hooks/useScroll'
import './nav.css'

const Nav = ({siteTitle, location}) => { 

    //const local = location === '/' ? 'index' : `${location.substring(1, location.length - 1)}`

    const { 
        stateTransitionPage, 
        transitionNav, 
        setTransitionNav} = useContext(GlobalStateContext)

    const [navOpen, setnavOpen] = useState(false)
    
    const { scrollY } = useScroll()

    const [scrollYOld, setscrollYOld] = useState(scrollY);

    const handleClick = () => {
        if(transitionNav){
            return
        }
        setscrollYOld(scrollY)
        if(navOpen)
            setnavOpen(false)
        else
            setnavOpen(true)
    }

    const handleClickNav= e =>{
        e.preventDefault()
        if(transitionNav){
            return
        }
        window.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 3s linear' })
        if(`${location}`=== e.target.name){
            return 
        }else{
            setTransitionNav(true)
            if(navOpen){
                setnavOpen(false)
            }
            if(window.innerWidth < 901){
                navigate(`${e.target.name}`)
                return
            }
            const tl = gsap.timeline({repeat:false})
            if(e.target.name !== '/'){
                //init nav aniamtion -> end in transitionPage
                tl.to(e.target, .8, {
                    paddingTop: '0',
                    paddingBottom: '0',
                    fontSize: '0px',
                    borderRadius: '10px',
                    border: `2px solid red`,
                })
                .to(e.target, .4, {
                    width: 'auto',
                    onComplete: (() => 
                        navigate(`${e.target.name}`)
                    )
                })
            }else{
                navigate(`${e.target.name}`)
            }
            tl.to('.nav a', {
                //cursor: 'no-drop',
            })
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
        <nav className={`nav nav-${stateTransitionPage.end} ${ scrollY > 10 && 'affix'}`}>
            <div className="navtitle">
                <Link 
                    className="cursorEffect"
                    to="/" 
                    name="/"
                    //activeStyle={{ cursor: `${transitionNav ? null : 'default'}`}} 
                    onClick={handleClickNav}
                >{siteTitle}</Link>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <Link
                            className="cursorEffect"
                            to="/about/"
                            name="/about/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >About Me
                        </Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link
                            className="cursorEffect"
                            to="/software/"
                            name="/software/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >Software</Link>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <Link 
                            className="cursorEffect"
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
