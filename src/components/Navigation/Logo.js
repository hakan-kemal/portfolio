import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/sample-logo-hkç.jpg';

export default function Logo() {
  return <Image src={logo} alt='initials-logo' />;
}

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
