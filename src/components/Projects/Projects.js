import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LogoGithub } from 'styled-icons/octicons/LogoGithub';
// import game from '../../assets/game.gif';
// import clone from '../../assets/clone.gif';
// import trainer from '../../assets/trainer.gif';
// import space from '../../assets/space.gif';
// import { Globe } from 'styled-icons/boxicons-regular/Globe';

const LogoGithubIcon = styled(LogoGithub)`
  color: #2d3436;
  height: 50px;
  margin: 0 10px;
`;

// const GlobeIcon = styled(Globe)`
//   color: #2d3436;
//   height: 50px;
//   margin: 0 10px;
// `;

const Main = styled.div`
  margin-top: 100px;

  .header {
    font-size: 4.4rem;
    color: #fdcb6e;
  }

  .img {
    // width: 100%;
    // margin: 10px;
    //   width: 30%;
    //   float: left;
    //   margin: 1.66%;
  }

  // div {
  //   border: 1px solid black;
  //   height: 100px;
  // }
`;

export default function Projects() {
  return (
    <Main>
      <Container>
        <h1 className='header'>Under construction</h1>
        <Row>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src='https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg?w=1155&h=1541'
              thumbnail
            />
            <h2>Memory Card Game</h2>
            <p>Front end: React, Redux and Bootstrap</p>
            <p>Back end: Express, Sequelize, and SSE.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src='http://theoaksatsacredrocks.com/wp-content/uploads/2017/02/nature-hike.jpg'
              thumbnail
            />
            <h2>TicketSwap Clone</h2>
            <p>Front end: React, Redux and Bootstrap</p>
            <p>Back end: Express, Sequelize, and PostgreSQL.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src='https://images.squarespace-cdn.com/content/v1/5b24aae97e3c3a476b08ff0e/1551522769594-RVZEANT22CHC9QNG5ISI/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Murujuga-general_02.jpg'
              thumbnail
            />
            <h2>IMP Trainer</h2>
            <p>Front end: React, Redux and Material UI</p>
            <p>Back end: Express, Sequelize, and PostgreSQL.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src='https://capechameleon.co.za/wp-content/uploads/2019/11/Widehere-1200x800_c.jpg'
              thumbnail
            />
            <h2>Space Explorer</h2>
            <p>Front end: Angular, Apollo and GraphQL</p>
            <p>Back end: Apollo and GraphQL</p>
          </Col>
        </Row>
      </Container>
      {/* <LogoGithubIcon /> */}
    </Main>
  );
}
/* <a
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
      </ul>

Layout should be like cards or image carousel kinda thing. Clicking on a project should open
a new page with a short paragraph with project details and a short paragraph with used
technologies. There should be links to GitHub, Netlify and/or Heroku */
