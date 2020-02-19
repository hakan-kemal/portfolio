import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { LogoGithub } from 'styled-icons/octicons/LogoGithub';
import trainer from '../../assets/img-imp-trainer.png';
import space from '../../assets/img-spacex-app.png';
import memory from '../../assets/img-memory.png';
import ticket from '../../assets/img-ticket.png';

// const LogoGithubIcon = styled(LogoGithub)`
//   color: #2d3436;
//   height: 50px;
//   margin: 0 10px;
// `;

const Main = styled.div`
  margin-top: 100px;
  font-size: 1.2rem;

  .header {
    font-size: 4.4rem;
    color: #fdcb6e;
  }
`;

export default function Projects() {
  return (
    <Main>
      <Container>
        <h1 className='header'>Coding Projects</h1>
        <Row>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src={memory}
              thumbnail
            />
            <h2>Memory Card Game</h2>
            <p>Multiplayer memory card game where the player has to find matching cards. Both players play simultaneously and the player who finds all matching cards with the highest score wins!</p>
            <p>The game was coded with React, Redux, Bootstrap, Express, Sequelize, and Server Sent Events</p>
            <p>Feel free to head over to my GitHub <a href='https://github.com/hakan-kemal/game-client' target='_blank' rel="noopener noreferrer">repository</a> to learn more about this project.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src={ticket}
              thumbnail
            />
            <h2>TicketSwap Clone</h2>
            <p>Full stack web application where users can buy and sell tickets for all kinds of events. Authorized users can create, edit, and remove events, tickets, and comments.</p>
            <p>The web app was coded with React, Redux, Bootstrap, Express, Sequelize, and PostgreSQL.</p>
            <p>An individual graded project made for final evalution of the Codaisseur bootcamp. The GitHub repository{/*<a href='https://github.com/hakan-kemal/ticket-server/' target='_blank' rel="noopener noreferrer">repository</a>*/} is private because the assignment will be reused for future students.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src={trainer}
              thumbnail
            />
            <h2>IMP Trainer</h2>
            <p>Full stack mobile application which provides users with personalised workout plans. This was a group project created by Codaisseur students to experience working on a Real World Project.</p>
            <p>The mobile app was coded with React, Redux, Material UI, Express, Sequelize, and PostgreSQL.</p>
            <p>Head over to the GitHub <a href='https://github.com/Official-Codaisseur-Graduate/my-imp-trainer' target='_blank' rel="noopener noreferrer">repository</a> to learn more about this project.</p>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              className='img'
              src={space}
              thumbnail
            />
            <h2>Space Explorer</h2>
            <p>A website created during a three-day Hackathon using several new web technologies. The website lists SpaceX launches fetched from the SpaceX API.</p>
            <p>The web app was coded with Angular, Apollo, and GraphQL.</p>
            <p>Head over to my GitHub <a href='https://github.com/hakan-kemal/space-explorer-client' target='_blank' rel="noopener noreferrer">repository</a> to check out the code.</p>
          </Col>
        </Row>
      </Container>
    </Main>
  );
}