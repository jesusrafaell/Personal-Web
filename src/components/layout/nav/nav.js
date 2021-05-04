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
        if(open)
            saveOpen(false)
        else
            saveOpen(true)
        
    }

    if(location === 'about'){
        if(windowGlobal.scrollY < 70){
            const info = document.querySelector('.info')
            const photo = document.querySelector('.photo')
            if(info !== null) {
                info.classList.remove("hiddeninfo")
                photo.classList.remove("disablephoto")
            }
        }
        if(windowGlobal.scrollY > 80){
            const info = document.querySelector('.info')
            const photo = document.querySelector('.photo')
            if(info !== null ) {
                const hidden = document.querySelector(".hiddeninfo")
                if (!hidden) {
                    info.classList.toggle("hiddeninfo")
                    photo.classList.toggle("disablephoto")
                }
            }
        }
    }

    if(location === 'index'){
        if(windowGlobal.scrollY < 80){
            const title = document.querySelector('.titlemain')
            if(title !== null) {
                title.classList.remove("disabletitle")
            }
        }
        if(windowGlobal.scrollY > 200){
            const title = document.querySelector('.titlemain')
            console.log(title)
            if(title!== null ) {
                const hidden = document.querySelector(".disabletitle")
                if (!hidden) {
                    title.classList.toggle("disabletitle")
                }
            }
        }
    }


    const navDisplay =() => {
        const navT = document.querySelector(".navTrigger")
        const links = document.querySelectorAll(".navlinks li")
        const main = document.querySelector(".mainListDiv")
        main.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        })
        navT.classList.toggle('active')
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

    const classNav = `nav ${location}`

    return(
        <nav className={classNav}>
            <div className="navtitle">
                <Link to="/" activeStyle={{ cursor: "default" }} onClick={(e) => handleClickScroll('title',e)}>{siteTitle}</Link>
            </div>
            <div className="mainListDiv main_list">
                <ul className="navlinks">
                    <li><Link to="/about"
                        onClick={(e) => handleClickScroll('about',e)}
                        activeClassName="selected"
                    >About</Link></li>
                    <li><Link to="/software"
                        onClick={(e) => handleClickScroll('software',e)}
                        activeClassName="selected"
                    >Software</Link></li>
                    <li><Link to="/contact"
                        onClick={(e) => handleClickScroll('contact',e)}
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
