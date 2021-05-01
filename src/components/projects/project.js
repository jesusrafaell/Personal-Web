import React, {useState} from 'react'
import linkIcon from '../../images/icons/link.png'

const Project = ({project}) => {

  return( 
   <tr>
      <td className="Title"><a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></td>
      <td className="Description">{project.info[0]}</td>
      <td className="Lenguage">{project.language}</td>
      <td className="Create">{project.created_at.substr(0,10)}</td>
      {project.info && project.info[1] ? (
         <td className="URL"><a href={project.info[1]} target="_blank" rel="noopener noreferrer"><img src={linkIcon}/></a></td>
      ):(
         <td className="URL">X</td>
      )}
   </tr>
  )
}

export default Project
