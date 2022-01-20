import React, { useState } from 'react';
import styled from 'styled-components';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <StyledCounter>
      <button onClick={() => setCounter(counter + 1)} className="plus">
        +
      </button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)} className="mines">
        -
      </button>
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
