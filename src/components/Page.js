import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from './AppBar';
import Footer from './Footer';

export default function Page({ children, routes }) {
  const StyledPage = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1rem;
        grid-template-areas:
            "header"
            "content"
            "footer";
        background: var(--primary-color);
    `;

  const Header = styled.div`
        grid-area: header;
        @media (min-width: 500px) {
            
        }
        grid-column: 1 / -1;
    `;

  const Content = styled.div`
        grid-area: content;
        grid-column: 1 / -1;
        background: var(--secondary-color);
        
        @media (min-width: 500px) {
            grid-column: 3 / 11;
        }
    `;

  const FooterContainer = styled.div`
        grid-area: footer;
        @media (min-width: 500px) {
            
        }
        grid-column: 1 / -1;
    `;

  return (
    <StyledPage>
      <Header>
        <AppBar routes={routes} />
      </Header>
      <Content>
        {children}
      </Content>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </StyledPage>
  );
}
