import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = ({siteTitle, location}) => { 

    const windowGlobal = typeof window !== 'undefined' && window

    const [y, setY] = useState(windowGlobal.scrollY)

    const [open, saveOpen] = useState(false)

    const handleNav = useCallback( e => {
        const window = e.currentTarget;
        if(y < window.scrollY || y > window.scrollY){
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
        const links = document.querySelectorAll(".navlinks li")
        const main = document.querySelector(".mainListDiv")
        main.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        });
        navT.classList.toggle('active')
    }



    const classNav = `nav ${location}`

    return(
        <nav className={classNav}>
            <div className="navtitle">
                <Link to="/" activeStyle={{ cursor: "default" }}>{siteTitle}</Link>
            </div>
            <div className="mainListDiv main_list">
                <ul className="navlinks">
                    <li><Link to="/about"
                        activeClassName="selected"
                    >About</Link></li>
                    <li><Link to="/software"
                        activeClassName="selected"
                    >Software</Link></li>
                    <li><Link to="/contact"
                        activeClassName="selected"
                    >Contact</Link></li>
                </ul>
            </div>
            <span aria-hidden="true" className="navTrigger" onClick={handleClick}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </nav>
    )
}  

export default Nav
