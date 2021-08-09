import React, { Fragment, useRef }  from 'react'

import AboutPage from '../components/about/aboutPage'
import SkillsPage from '../components/about/skillsPage'


const About = ({ transitionStatus }) => {

  const skillRef = useRef()

  const handleScrollSkill = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Fragment>
      <AboutPage handleScrollSkill={handleScrollSkill} refe={skillRef}/>
      <SkillsPage refe={skillRef}/>
    </Fragment>
  )
}

export default About
