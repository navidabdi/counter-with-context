import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <StyledFooter>
      <span>Footer</span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  border-top: 1px solid gray;
`;
