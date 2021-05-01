import * as React from 'react'
import {Link} from 'gatsby'
import email from '../../images/icons/email.png'
import github from '../../images/icons/github.png'
import instagram from '../../images/icons/instagram.png'
import linkedIn from '../../images/icons/linkedIn.png'

const Footer = () => (
    <footer className="footer container-fluid"> 
        <div className="social_links">
            <a href="https://www.instagram.com/jesusrafaell/" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg ig combo">
                    <i className="fa fa-circle fa-stack-2x circle"></i>
                    <img src={instagram} />
                  </span>
            </a>
            <a href="https://github.com/jesusrafaell" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg tw combo">
                    <i className="fa fa-circle fa-stack-2x circle"></i>
                    <img src={github} />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/jesus-hernandez-299b84131/" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg tw combo">
                    <i className="fa fa-circle fa-stack-2x circle"></i>
                    <img src={linkedIn} />
                </span>
            </a>
            <Link to="/contact">
                <span className="fa-stack fa-lg tw combo">
                    <i className="fa fa-circle fa-stack-2x circle"></i>
                    <img src={email} />
                </span>
            </Link>
        </div>
    </footer>
)

export default Footer
