import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 1;

  .paragraph {
    font-size: 2.2em;
  }

  .header {
    font-size: 4.4rem;
    color: #fdcb6e;
  }
`;

export default function About() {
  return (
    <Header>
      <p className='header'>Under construction</p>
      {/* <p className='paragraph'>
        <strong>Github:</strong>Junior Developer; JavaScript, React, Redux, Node, Express &
        PostgreSQL. Previously Aerospace Engineer, skilled in math, physics, and great with numbers!
      </p>
      <p className='paragraph'>
        Recently graduated full stack developer embarking on a new journey in the digital technology
        field as a Junior Developer. My drive to succeed stems from my passion and curiosity for
        technology together with my willingness to learn. Resulting in my goal to land my first
        developer position at an awesome company that matches my values and ideals; being
        compassionate and having respect for all. Also an experienced engineer with a demonstrated
        history of working and studying in the aviation industry. Skilled in Aviation, Aerospace,
        Aerodynamics, Math, Physics, and Engineering related fields.
      </p>
      <p className='paragraph'>
        Thanks for visiting my portfolio website, I hope you liked what you saw! Feel free to also
        check out my{' '}
        <a href='https://github.com/hakan-kemal' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>{' '}
        and{' '}
        <a
          href='https://www.linkedin.com/in/hakan-kemal-cuhadar/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>{' '}
        profiles, and don't forget to connect ;&#41;
      </p> */}
    </Header>
  );
}
// Write a paragraph about myself, explaining in short my background (culturally and
// interests), my experiences, my achievements, what am I proud of. Talk about my hobbies,
// interests, and things I like. Be you and informally introduce yourself.
