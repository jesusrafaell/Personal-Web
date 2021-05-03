import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = ({ siteTitle }) => { 
    
    const windowGlobal = typeof window !== 'undefined' && window

    const [y, setY] = useState(windowGlobal.scrollY)

    const [open, saveOpen] = useState(false)

    const handleNav = useCallback( e => {
        const window = e.currentTarget;
        if(y < window.scrollY){
            if(open){
                navDisplay()
                saveOpen(false)
            }
        }
        setY(window.scrollY)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[y]
    )

    useEffect(() => {
        setY(windowGlobal.scrollY)
        windowGlobal.addEventListener("scroll", handleNav)
        return () => {
            windowGlobal.removeEventListener("scroll", handleNav)
        }
    },[handleNav, windowGlobal])

    const handleClick = () => {
        navDisplay()
        if(open){
            saveOpen(false)
        }else{
            saveOpen(true)
        }
    }

    const navDisplay =() => {
        const navT = document.querySelector(".navTrigger")
        const nav = document.querySelector(".bglinks")
        const links = document.querySelectorAll(".navlinks li")

        nav.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        });
        navT.classList.toggle('active')
    }

    return(
        <nav className="nav">
            <div className="bglinks">
                <div className="navtitle">
                    <Link to="/">JesusRafaell</Link>
                </div>
                <div className="mainListDiv main_list">
                    <ul className="navlinks">
                        <li><Link to="/about"
                            activeClassName="selected"
                        >About Me</Link></li>
                        <li><Link to="/software"
                            activeClassName="selected"
                        >Software</Link></li>
                        <li><Link to="/contact"
                            activeClassName="selected"
                        >Contact</Link></li>
                    </ul>
                </div>
                <span className="navTrigger" onClick={handleClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    )
}  

export default Nav
