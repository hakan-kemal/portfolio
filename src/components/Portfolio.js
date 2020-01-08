import React from 'react';
import './Portfolio.css';
import { Route } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import AboutContainer from './About/AboutContainer';
import SkillsContainer from './Skills/SkillsContainer';
import ExperienceContainer from './Experience/ExperienceContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import ContactContainer from './Contact/ContactContainer';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Route path='/' component={HomeContainer} exact />
      <Route path='/about' component={AboutContainer} />
      <Route path='/skills' component={SkillsContainer} />
      <Route path='/experience' component={ExperienceContainer} />
      <Route path='/projects' component={ProjectsContainer} />
      <Route path='/contact' component={ContactContainer} />
    </div>
  );
}
