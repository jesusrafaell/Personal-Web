import React from 'react'
import '../../styles/about/skills.css'

//logos
import logoReact from '../../images/logos/react.svg'
import logoGsap from '../../images/logos/gsap.svg'
import logoHtml from '../../images/logos/html.svg'
import logoCss3 from '../../images/logos/ccs3.svg'
import logojs from '../../images/logos/js.svg'
import logoNode from '../../images/logos/node.svg'

const SkillsPage = ({refe}) => {
   return (
      <div ref={refe} className="skillsPage">
         <div className="titleSkills">
            <h2>My Skills</h2>
         </div>
         <div className="grid">
            <div className="grid-col">
               <div className="item">
                  <div className="item-image">
                     <img src={logoHtml} alt="html"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">Html</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
              <div className="item">
                  <div className="item-image">
                     <img className="imgTop" src={logoGsap} alt="gsap"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">Gsap</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid-col">
               <div className="item">
                  <div className="item-image">
                     <img src={logoCss3} alt="Css3"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">Css3</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="item-image">
                     <img src={logoNode} alt="node"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">Nodejs</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid-col">
               <div className="item">
                  <div className="item-image">
                     <img src={logojs} alt="javascript"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">JavaScript</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="gridTop">
            <div className="grid-col">
               <div className="item">
                  <div className="item-image">
                     <img src={logoReact} alt="react"/>
                  </div>
                  <div className="item-content">
                     <div className="item-info">
                        <h2 className="item-title">React</h2>
                        <p className="item-descrip"></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
      </div>
   )
}

export default SkillsPage
