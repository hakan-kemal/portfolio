import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

export default class NavigationContainer extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Navigation />
      </div>
    );
  }
}
