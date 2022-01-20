import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  border-bottom: 1px solid gray;
`;
