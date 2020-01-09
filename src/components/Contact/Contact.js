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

export default function Contact() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div style={{ marginTop: '675px' }}>
      <p>Hakan Çuhadar</p>
      <p>Junior Web Developer</p>
      <p>Amsterdam, The Netherlands</p>
      <h4>Contact page - Designed and coded by Hakan Çuhadar, {year}. All rights reserved.</h4>
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
    </div>
  );
}
