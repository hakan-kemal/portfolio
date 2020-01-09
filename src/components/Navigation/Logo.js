import React from 'react';
import styled from 'styled-components';
import logo from '../../images/abstract-logo.png';

export default function Logo() {
  return (
    <a href='/'>
      <Image src={logo} alt='Initials Logo' />
    </a>
  );
}

const Image = styled.img`
  height: 60px;
  margin: auto 0;
`;
