import React  from 'react'
import linkIcon from '../images/icons/link.png'

const Project = ({project}) => {

  return( 
   <tr>
      <td className="pro"><span className="addTd">Title</span><a className="cursorEffect"  href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></td>
      <td className="pro"><span className="addTd">About</span>{project.info[0]}</td>
      <td className="pro"><span className="addTd">Language</span>{project.language}</td>
      <td className="pro"><span className="addTd">Create</span>{project.created_at.substr(0,10)}</td>
      <td className="pro">
         <span className="addTd ">Deploy</span>
         {project.info && project.info[1] ? (
            <a href={project.info[1]} target="_blank" rel="noopener noreferrer">
               <img src={linkIcon} alt="link"/>
            </a>
         ):(
           'X'
         )}
      </td>
   </tr>
  )
}

export default Project
