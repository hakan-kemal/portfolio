import React from 'react';
import styled from 'styled-components';
import { LogoGithub } from 'styled-icons/octicons/LogoGithub';
import { Globe } from 'styled-icons/boxicons-regular/Globe';

const LogoGithubIcon = styled(LogoGithub)`
  color: #2d3436;
  height: 50px;
  margin: 0 10px;
`;

const GlobeIcon = styled(Globe)`
  color: #2d3436;
  height: 50px;
  margin: 0 10px;
`;

export default function Projects() {
  return (
    <div style={{ marginTop: '100px' }}>
      <a
        href='https://github.com/hakan-kemal/space-explorer-client'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LogoGithubIcon />
      </a>
      <a
        href='https://github.com/hakan-kemal/game-client'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LogoGithubIcon />
      </a>
      <a
        href='https://github.com/hakan-kemal/pre-academy-homework'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LogoGithubIcon />
      </a>
      <br />
      <a href='https://api.spacexdata.com/v3/launches' target='_blank' rel='noopener noreferrer'>
        <GlobeIcon />
      </a>
      <a
        href='https://obscure-beach-71010.herokuapp.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GlobeIcon />
      </a>
      <a
        href='https://pre-academy-website-hakan.netlify.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GlobeIcon />
      </a>
      <ul>
        <li>Hackathon project; must be updated and improved actually</li>
        <li>Real world project; leave as is</li>
        <li>
          Individual assignment; Project is private and remains private, but must update and improve
          readme to show something
        </li>
        <li>Game project; leave code as is, but must update and improve readme</li>
      </ul>
      <p>
        Layout should be like cards or image carousel kinda thing. Clicking on a project should open
        a new page with a short paragraph with project details and a short paragraph with used
        technologies. There should be links to GitHub, Netlify and/or Heroku
      </p>
    </div>
  );
}
