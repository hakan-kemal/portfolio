import React, { Component, Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import { Route } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import AboutContainer from './About/AboutContainer';
import SkillsContainer from './Skills/SkillsContainer';
import ExperienceContainer from './Experience/ExperienceContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import ContactContainer from './Contact/ContactContainer';
import GlobalStyles from '../styles/Global';

export default class Portfolio extends Component {
  state = {
    navOpen: false
  };

  handleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    return (
      <Fragment>
        <Navigation navState={this.state.navOpen} handleNav={this.handleNav} />
        <Route path='/' component={HomeContainer} exact />
        <Route path='/about' component={AboutContainer} />
        <Route path='/skills' component={SkillsContainer} />
        <Route path='/experience' component={ExperienceContainer} />
        <Route path='/projects' component={ProjectsContainer} />
        <Route path='/contact' component={ContactContainer} />
        <GlobalStyles />
      </Fragment>
    );
  }
}
