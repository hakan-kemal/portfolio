import React, { Component, Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import { Route } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import Footer from './Footer';
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
        <GlobalStyles />
        <Navigation navState={this.state.navOpen} handleNav={this.handleNav} />
        <Route path='/' component={HomeContainer} exact />
        <Route path='/projects' component={ProjectsContainer} />
        <Route path='/' component={Footer} exact />
      </Fragment>
    );
  }
}
