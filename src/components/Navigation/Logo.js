import React from 'react';
import styled from 'styled-components';
import { Code } from 'styled-icons/boxicons-regular/Code';

const CodeIcon = styled(Code)`
  color: #fdcb6e;
  height: 50px;
  margin: auto 0;
`;

export default function Logo() {
  return (
    <a href='/'>
      <CodeIcon />
    </a>
  );
}
