import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background: #333;
    min-height: 300px;
    display: flex;
    justify-content: center;
    color: #FFF;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p>
&copy;SK Solar Oz Pty Ltd.
        {' '}
        {new Date().getFullYear()}
      </p>
    </StyledFooter>
  );
}
