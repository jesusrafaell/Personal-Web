import React from 'react'
import '../../styles/about/skills.css'
import Skill from './skill'
import { skills } from './skills'

const SkillsPage = ({refe}) => {

   return (
      <div ref={refe} className="skillsPage">
         <div className="titleSkills">
            <h2>My Skills</h2>
         </div>
         <div className="cards">
            {skills.map((data, key) => (
               <Skill key={key} data={data}/>
            ))}
         </div>
        
      </div>
   )
}

export default SkillsPage
