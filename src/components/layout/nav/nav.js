import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = ({ siteTitle }) => { 
    const [y, setY] = useState(window.scrollY)
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
        setY(window.scrollY)
        window.addEventListener("scroll", handleNav)
        return () => {
            window.removeEventListener("scroll", handleNav)
        }
    },[handleNav])

    const handleClick = () => {
        navDisplay()
        if(open){
            saveOpen(false)
        }else{
            saveOpen(true)
        }
    }

    const navDisplay =() => {
        const hamburger = document.querySelector(".hamburger")
        const navLinks = document.querySelector(".nav-links")
        const links = document.querySelectorAll(".nav-links li")
       //Animate Links
        navLinks.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        });
        //Hamburger Animation
        hamburger.classList.toggle("toggle")
    }

    return(
        <nav className="navbar">
            <div className="navtitle">
                <Link to="/"><h1>{siteTitle}</h1></Link>
            </div>
            <div aria-hidden="true" className="hamburger" onClick={handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <li><Link to="/about"
                    activeStyle={{ color: "cyan" }}
                >About Me</Link></li>
                <li><Link to="/software"
                    activeStyle={{ color: "cyan" }}
                >Software</Link></li>
                <li><Link to="/contact"
                    activeStyle={{ color: "cyan" }}
                >Contact</Link></li>
            </ul>
        </nav>
    )
}  

export default Nav
