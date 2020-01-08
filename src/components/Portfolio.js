import React from 'react';
import './Portfolio.css';
import HomeContainer from './Home/HomeContainer';
import AboutContainer from './About/AboutContainer';
import SkillsContainer from './Skills/SkillsContainer';
import ExperienceContainer from './Experience/ExperienceContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import ContactContainer from './Contact/ContactContainer';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2>Portfolio Website</h2>
      <HomeContainer />
      <AboutContainer />
      <SkillsContainer />
      <ExperienceContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
}
