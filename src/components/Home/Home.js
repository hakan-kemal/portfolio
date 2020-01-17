import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-top: 100px;
`;

export default function Home() {
  return (
    <Header>
      <p>Hi I'm Hakan Kemal Çuhadar</p>
      {/* <p>
        Thanks for visiting my portfolio website, this website aims to showcase my current skill
        level and present my coding projects.
      </p> */}
      <p>
        I like to code, am curious about technology, and love to create digital products. Currently
        available for new oppurtunities in the digital technology field as a Junior Developer.
      </p>
      {/* Will contain an intro with a nice image, nice layout, and nice design. */}
    </Header>
  );
}
