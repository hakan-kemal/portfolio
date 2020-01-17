import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { MailSend } from 'styled-icons/boxicons-regular/MailSend';

const GitHubIcon = styled(Github)`
  color: #fdcb6e;
  height: 50px;
`;

const LinkedInIcon = styled(LinkedinSquare)`
  color: #fdcb6e;
  height: 50px;
`;

const MailSendIcon = styled(MailSend)`
  color: #fdcb6e;
  height: 50px;
`;
const Wrapper = styled.footer`
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Wrapper>
      <a href='https://github.com/hakan-kemal' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/hakan-kemal-cuhadar/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedInIcon />
      </a>
      <a href='mailto:h.k.cuhadar@gmail.com'>
        <MailSendIcon />
      </a>
      <h4>My Portfolio - Designed and coded by Hakan Çuhadar, {year}.</h4>
    </Wrapper>
  );
}
