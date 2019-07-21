import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import AppBar from '../components/AppBar';
import OurTeamImg from '../images/our-team.jpg';
import OurWorkVictoria from '../images/our-work-victoria.jpg';
import OurWorkQueensland from '../images/our-work-queensland.jpg';
import OurWorkNSW from '../images/our-work-new-south-wales.jpg';
import Footer from '../components/Footer';

const HomePage = styled.div`
    background: var(--primary-color);
`;

const StyledH1 = styled.h1`
    font-size: 3em;
    color: var(--primary-light);
    margin-top: 5rem;
`;

const StyledH4 = styled.h4`
    color: var(--secondary-color);
`;
const MainPanel = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary-light);
`;

const PrimaryPanel = styled.div`
    text-align: center;
    margin: 6rem 0;
`;

const SecondaryPanel = styled.div`
    position: relative;
    min-height: 400px;
    margin-top: 8rem;
    padding: 20px 0px 70px;
`;

const SecondaryPanelMain = styled.div`
    position: relative;
    width: 95%;
    padding-bottom: 2rem;
    z-index: 1;
    margin: 60px auto 0px;
    text-align: center;
`;

const PanelContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 1rem;

    color: ${props => (props.light ? 'var(--primary-light)' : 'var(--primary-dark)')};

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const PanelImage = styled.img`
box-shadow: 1rem 1rem 1rem var(--primary-dark);
`;
const PanelImageLeft = withReveal(PanelImage, <Fade left />);

const PanelImageRight = withReveal(PanelImage, <Fade right />);

const SecondaryPanelHeader = styled.h1`
  font-size: 2em;
`;

const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 230px;

    @media (min-width: 500px) {
        min-height: 315px;
    }
`;

const PanelScew = styled.div`
    background: var(--primary-light);
    position: absolute;
    top: 50%;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    box-shadow: 1rem 1rem 1rem var(--primary-dark);
    transform: skewY(calc(var(--paperSkew) * var(--skewDir))) translateY(-50%);
    --paperSkew: -5deg;
    --skewDir: ${props => (props.inverted ? 1 : -1)};
`;


export default function App({ data }) {
  const imageIds = ['ourTeamImg', 'OurWorkVictoria', 'OurWorkQueensland', 'OurWorkNSW'];
  const routes = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter
  }));

  return (
    <HomePage>
      <AppBar routes={routes} />
      <MainPanel>
        <StyledH1>Solar Energy Contracting and Solutions</StyledH1>
        <StyledH4>Cutting-edge, focused & high quality contractors of Solar Farms.</StyledH4>
      </MainPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>Who We Are</SecondaryPanelHeader>
          <PanelContent>
            <h4>
At SK Solar Oz Pty Ltd we have been working with a world leading renewable energy contractor on
some of the largest solar farm projects in Australia.
            </h4>
            <VideoWrapper>
              <iframe title="who-we-are-video" width="100%" height="100%" src="https://www.youtube.com/embed/nDeWhhXouQQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </VideoWrapper>
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew />
      </SecondaryPanel>
      <PrimaryPanel>
        <StyledH1>What We Do</StyledH1>
        <PanelContent>
          <PanelImageLeft id={imageIds[0]} src={OurTeamImg} alt="our team" width="100%" />
          <StyledH4>
We have for a number of years successfully delivered the
installation of various types of solar panel and clamping systems
          </StyledH4>
        </PanelContent>
      </PrimaryPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>Our Work</SecondaryPanelHeader>
          <SecondaryPanelHeader>We have completed solar projects all across Australia</SecondaryPanelHeader>
          <PanelContent>
            <div>
              <SecondaryPanelHeader>Gannawarra - Victoria</SecondaryPanelHeader>
              <p>Client: RCR Tomlinson</p>
              <p>System: Jinko Solar - 2000 x 10000 ATI single axis tracking system</p>
              <p>Panels installed: 110,000</p>
            </div>
            <PanelImageRight id={imageIds[1]} src={OurWorkVictoria} alt="our work in victoria" width="100%" />
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew inverted />
      </SecondaryPanel>
      <PrimaryPanel>
        <PanelContent light>
          <PanelImageLeft id={imageIds[2]} src={OurWorkQueensland} alt="our work in queensland" width="100%" />
          <div>
            <SecondaryPanelHeader>Townsville - Queensland</SecondaryPanelHeader>
            <p>Client: RCR Tomlinson</p>
            <p>System: 8 panels high First Solar - 600 x 1200 fixed system</p>
            <p>Number of panels installed: 400,000</p>
          </div>
        </PanelContent>
      </PrimaryPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <PanelContent>
            <div>
              <SecondaryPanelHeader>Broken Hill - New South Wales</SecondaryPanelHeader>
              <p>Client: RCR Tomlinson</p>
              <p>System: 4 panels high First Solar - 600 x 1200 fixed system</p>
              <p>Panels installed: 670,000</p>
              <p>Installation of connections, harness and jumpers: 750,000</p>
            </div>
            <PanelImageRight id={imageIds[3]} src={OurWorkNSW} alt="our work in new south wales" width="100%" />
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew />
      </SecondaryPanel>
      <MainPanel>
        <StyledH1>Our Goal</StyledH1>
        <StyledH4>
Renewable energy is a rapidly evolving industry and we have been a key part in the successful delivery of
many solar farm projects thanks to our ever expanding base of multi talented skill labour.
        </StyledH4>
        <h4>We strive to see our clients succeed and to provide a cleaner, greener, and safer energy source to all of Australia.</h4>
      </MainPanel>
      <Footer />
    </HomePage>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
