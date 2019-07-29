import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { Mail, Call } from '@material-ui/icons';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import OurTeamImg from '../images/our-team.jpg';
import OurWorkVictoria from '../images/our-work-victoria.jpg';
import OurWorkNSW from '../images/our-work-new-south-wales.jpg';

const HomePage = styled.div`
    background: var(--primary-color);
`;

const StyledH1 = styled.h1`
    font-size: 3em;
    color: var(--primary-light);
    
`;

const StyledH4 = styled.h4`
    color: var(--secondary-color);
`;

const MainPanel = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary-light);
    margin-top: 18rem;

    @media (min-width: 800px) {
      margin-top: 16rem;
    }
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

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const PanelImage = styled.img`
box-shadow: 1rem 1rem 1rem var(--primary-dark);
overflow: hidden;
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

    @media (min-width: 800px) {
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

const StyledMail = styled(Mail)`
  color: var(--primary-green);
  margin-right: 0.5rem;
  margin-left: -0.5rem;
`;

const StyledCall = styled(Call)`
  color: var(--primary-green);
  margin-right: 0.5rem;
  margin-left: -0.5rem;
`;

const ContactDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App({ data }) {
  const imageIds = ['ourTeamImg', 'OurWorkVictoria', 'OurWorkQueensland', 'OurWorkNSW', 'SolarPanelSide', 'SolarPanelSunset'];
  const routes = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter
  }));

  return (
    <HomePage>
      <SEO />
      <AppBar routes={routes} animateLogo />
      <MainPanel>
        <StyledH1>Solar Energy Contracting and Solutions</StyledH1>
        <StyledH4>Cutting-edge, focused & high quality contractors of Solar Farms</StyledH4>
      </MainPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>Who We Are</SecondaryPanelHeader>
          <PanelContent>
            <h4>
              At SK Solar Oz Pty Ltd we have been working with world leading renewable energy contractors on
              some of the largest solar farm projects in Australia.
            </h4>
            <PanelImageRight id={imageIds[0]} src={OurTeamImg} alt="our team" width="100%" />
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew />
      </SecondaryPanel>
      <PrimaryPanel>
        <StyledH1>What We Do</StyledH1>
        <PanelContent light>
          <PanelImageLeft id={imageIds[1]} src={OurWorkVictoria} alt="our team" width="100%" />
          <div>
            <StyledH4>
            For years we have successfully delivered the
            installation of various types of solar panel and clamping systems
            </StyledH4>
            <p>Install harness / jumpers on tracker systems</p>
            <p>Connection of solar panels and solar panel clips</p>
            <p>Logistics & staging of solar panels from delivery to install</p>
            <p>Scanning & log records off arrays and feeders</p>
            <p>Mechanical installation of trackers / mibs / dampners</p>
          </div>
        </PanelContent>
      </PrimaryPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>We have completed solar projects all across Australia</SecondaryPanelHeader>
          <PanelContent>
            <div>
              <SecondaryPanelHeader>Victoria</SecondaryPanelHeader>
              <SecondaryPanelHeader>Queensland</SecondaryPanelHeader>
              <SecondaryPanelHeader>New South Wales</SecondaryPanelHeader>
              {/* <PanelImageRight id={imageIds[1]} src={SolarPanelSide} alt="our work in victoria" width="90%" /> */}
            </div>
            <div>
              <PanelImageRight id={imageIds[3]} src={OurWorkNSW} alt="our work in new south wales" width="100%" />
              {/* <PanelImageLeft id={imageIds[2]} src={SolarPanelSunset} alt="our work in queensland" width="100%" /> */}
            </div>
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew inverted />
      </SecondaryPanel>
      <PrimaryPanel>
        <StyledH1>Contact Us</StyledH1>
        <PanelContent light>
          <div>
            <StyledH4>
          Renewable energy is a rapidly evolving industry and we have been a key part in the successful delivery of
          many solar farm projects thanks to our ever expanding base of multi-talented skilled labour.
            </StyledH4>
            <h4>We strive to see our clients succeed and to provide a cleaner, greener, and safer energy source to all of Australia.</h4>
          </div>
          <div>
            <StyledH4>Contact Luke and Robbie</StyledH4>
            <ContactDetailsContainer>
              <StyledCall />
              <h4>
                0416007022
              </h4>
            </ContactDetailsContainer>
            <ContactDetailsContainer>
              <StyledMail />
              <h4>
                luke@sksolaroz.com.au
              </h4>
            </ContactDetailsContainer>
            <ContactDetailsContainer>
              <StyledCall />
              <h4>
              0439608081
              </h4>
            </ContactDetailsContainer>
            <ContactDetailsContainer>
              <StyledMail />
              <h4>
                robbie@sksolaroz.com.au
              </h4>
            </ContactDetailsContainer>
          </div>
        </PanelContent>
      </PrimaryPanel>
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
