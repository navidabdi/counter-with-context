import React from 'react';
import styled from 'styled-components';

const Counter = () => {
  return (
    <StyledCounter>
      <button className="plus">+</button>
      <h2>Counter</h2>
      <button className="mines">-</button>
    </StyledCounter>
  );
};

export default Counter;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  width: 300px;
  margin: auto;
  button {
    font-size: 2rem;
    padding: 1rem 2rem;
    cursor: pointer;
    .mines {
      /* font-size: 2.5rem; */
    }
  }
`;
