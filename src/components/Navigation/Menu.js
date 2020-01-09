import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

export default function Menu(props) {
  const { open } = useSpring({ open: props.navState ? 0 : 1 });

  if (props.navState === true) {
    return (
      <Wrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <Links>
          <li>
            <a href='/about' onClick={props.handleNav}>
              About
            </a>
          </li>
          <li>
            <a href='/skills' onClick={props.handleNav}>
              Skills
            </a>
          </li>
          <li>
            <a href='/experience' onClick={props.handleNav}>
              Experience
            </a>
          </li>
          <li>
            <a href='/projects' onClick={props.handleNav}>
              Projects
            </a>
          </li>
          <li>
            <a href='/contact' onClick={props.handleNav}>
              Contact
            </a>
          </li>
        </Links>
      </Wrapper>
    );
  }
  return null;
}

const Wrapper = styled(animated.div)`
  background: #2d3436;
  opacity: 0.55;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const Links = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;