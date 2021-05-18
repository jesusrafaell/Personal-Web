import React, {useState } from 'react'
import { Link }from 'gatsby'
import useScroll from '../../../hooks/useScroll'
import './nav.css'
import { gsap } from 'gsap'
import { navigate } from 'gatsby'

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

    const handleClickNav= e =>{
        window.scroll({top: 0, left: 0, behavior: 'smooth', transition: 'all 2s linear' })
        if(`${location}`=== e.target.name){
            e.preventDefault()
            return 
        }else{
            if(navOpen){
                setnavOpen(false)
            }
            if(window.innerWidth < 901){
                return
            }
            e.preventDefault()
            //let colorBorder = local === 'software' ? 'black' : 'white'
            if(e.target.name !== '/'){
                const tl = gsap.timeline({repeat:false})
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
                })
            }
            setTimeout(() => {
                navigate(`${e.target.name}`)
            }, 1000)
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
