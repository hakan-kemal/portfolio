import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to='/'>
        <h4>Portfolio Website - Home page</h4>
      </Link>
      <Link to='/about'>
        <h4>About</h4>
      </Link>
      <Link to='/skills'>
        <h4>Skills</h4>
      </Link>
      <Link to='/experience'>
        <h4>Experience</h4>
      </Link>
      <Link to='/projects'>
        <h4>Projects</h4>
      </Link>
      <Link to='/contact'>
        <h4>Contact</h4>
      </Link>
    </div>
  );
}
