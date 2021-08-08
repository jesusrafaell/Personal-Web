import React from 'react'
import { gsap } from "gsap"

const Skill = ({ data}) => {

   const handleBar = () => {
      gsap.to(`.skill-inner-bar-${data.name}`, 2,{
         width: `${data.porcen}%`,
      })     
   }

   return (
      <div className="item">
         <div 
            className={`item-image logo-${data.name}`}
            onMouseEnter={handleBar}
            role="presentation"
         >
            <img  src={data.logo} alt={data.name}/>
         </div>
         <div className="item-content">
            <div className="item-text">
               <h2 className="item-title">{data.name}</h2>
               <p className="item-descrip"></p>
            </div>
               <div className="skill">
                  <div className="skill-outer-bar">
                     <div className={`skill-inner-bar skill-inner-bar-${data.name}`}>
                        </div>
                  </div>
               </div>
         </div>
      </div>
   )
}

export default Skill
