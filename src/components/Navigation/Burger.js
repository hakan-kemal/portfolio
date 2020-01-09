import React from 'react';
import styled from 'styled-components';

export default function Burger(props) {
  return (
    <Wrapper onClick={props.handleNav}>
      <div className={props.navState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: none;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
`;
