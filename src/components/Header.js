import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCounter';

const Header = () => {
  const { counter, setCounter } = useStateContext();
  return (
    <StyledHeader>
      <h1>Header</h1>
      <div className="counter-num">
        <p>Counter Number:</p>
        <span>{counter}</span>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 10vh;
  border-bottom: 1px solid gray;
  .counter-num {
    display: flex;
    span {
      margin-left: 0.5rem;
    }
  }
`;
