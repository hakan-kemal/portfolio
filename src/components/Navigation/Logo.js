import React from 'react';
import styled from 'styled-components';
// import logo from '../../images/abstract-logo.png';
import { Code } from 'styled-icons/boxicons-regular/Code';

export default function Logo() {
  return (
    <a href='/'>
      {/* <Image src={logo} alt='Initials Logo' /> */}
      <CodeIcon />
    </a>
  );
}

// const Image = styled.img`
//   height: 60px;
//   margin: auto 0;
// `;

const CodeIcon = styled(Code)`
  color: #fdcb6e;
  height: 50px;
`;
