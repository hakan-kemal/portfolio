import React from 'react';
import styled from 'styled-components';
// import { LogoGithub } from 'styled-icons/octicons/LogoGithub';
// import { Globe } from 'styled-icons/boxicons-regular/Globe';

// const LogoGithubIcon = styled(LogoGithub)`
//   color: #2d3436;
//   height: 50px;
//   margin: 0 10px;
// `;

// const GlobeIcon = styled(Globe)`
//   color: #2d3436;
//   height: 50px;
//   margin: 0 10px;
// `;

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 1;
`;

export default function Projects() {
  return (
    <Main>
      {/* <a
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
        <li>Hackathon project: Space Explorer</li>
        <li>Real world project: My IMP Trainer</li>
        <li>Individual assignment: TicketSwap Clone</li>
        <li>Game project: Memory Card Game</li>
      </ul> */}
    </Main>
  );
}

// Layout should be like cards or image carousel kinda thing. Clicking on a project should open
// a new page with a short paragraph with project details and a short paragraph with used
// technologies. There should be links to GitHub, Netlify and/or Heroku
