import React, { useState, useContext } from 'react'
import { Link, navigate }from 'gatsby'
import { gsap } from 'gsap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { GlobalStateContext } from '../../../context/GlobalContextProvider'

import useScroll from '../../../hooks/useScroll'
import './nav.css'

const Nav = ({siteTitle, location}) => { 

    const { 
        stateTransitionPage, 
        transitionNav, 
        setTransitionNav
    } = useContext(GlobalStateContext)

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

    const handleClickNav= e =>{
        setnavOpen(false)
        return ;
        e.preventDefault()
        window.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 3.5s linear' })
        if(transitionNav || stateTransitionPage.on){
            return
        }
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
                setTimeout(() => {
                    navigate(`${e.target.name}`)
                }, 1500)
            }
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
    console.log(location)

    return(
        <nav className={`nav nav-${location} ${ scrollY > 10 && 'affix'}`}>
            <div className="navtitle">
                <AniLink 
                    className="cursorEffect"

                    cover
                    bg="#000000"
                    direction="right"
                    duration={2}

                    to="/" 
                    name="/"
                    //activeStyle={{ cursor: `${transitionNav ? null : 'default'}`}} 
                >{siteTitle}</AniLink>
            </div>
            <div className={`mainListDiv main_list ${ handleNavOpen() && 'open' }`}>
                <ul className="navlinks">
                    <li className={`${ navOpen && 'fade'}`} >
                        <AniLink
                            className="cursorEffect"

                            swipe
                            direction="left"

                            to="/about/"
                            name="/about/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >About Me
                        </AniLink>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <AniLink
                            className="cursorEffect"

                            swipe
                            direction="left"

                            to="/software/"
                            name="/software/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >Software</AniLink>
                    </li>
                    <li className={`${ navOpen && 'fade'}`}>
                        <AniLink 
                            className="cursorEffect"

                            swipe
                            direction="left"

                            to="/contact/"
                            name="/contact/"
                            onClick={handleClickNav}
                            activeClassName="selected"
                        >Contact</AniLink>
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
