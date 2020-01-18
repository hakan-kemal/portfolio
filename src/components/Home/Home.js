import React from 'react';
import styled from 'styled-components';
import img from '../../assets/profile-image.jpg';

const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 1;

  .hi {
    font-size: 2.2rem;
  }

  .header {
    font-size: 4.4rem;
    color: #fdcb6e;
  }

  .intro {
    font-size: 2.2em;
  }

  .image {
    height: 100px;
    border-radius: 50px;
  }
`;

export default function Home() {
  return (
    <Header>
      <p className='hi'>Hi I'm </p>
      <h1 className='header'>Hakan Çuhadar</h1>
      <p className='intro'>
        I like to code, am curious about technology, and love to create digital products. Currently
        available for new oppurtunities in the digital technology field as a Junior Developer.
      </p>
      <img src={img} alt='Profile' className='image' />
    </Header>
  );
}
