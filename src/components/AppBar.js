import React, { useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png';

const StyledLink = styled(Link)`
    color: var(--primary-light);
    text-shadow: none;
    text-decoration: none;
`;

const StyledAppBar = styled(MaterialAppBar)`
    background-color: var(--primary-color) !important;
`;

const AppNameContainer = styled.div` 
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    @media (min-width: 500px) {
        min-width: 50%;
        justify-items: start;
    }
`;

const LogoImg = styled.img`
  height: 100px;
  transition-duration: 0.5s;
  transform: ${props => (props.animate ? 'translateY(8rem) scale3d(2, 2, 1)' : 'translateY(0px)')};
  
  @media (min-width: 500px) {
    transform-origin: 120% 0% 0px;
    transform: ${props => (props.animate ? 'translateY(5rem) translateX(50vw) scale3d(2, 2, 1)' : 'translateY(0px)')};
  }
`;


const AppBarButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const AppBarMenuButtonContainer = styled.div`
    position: absolute;
`;

export default function AppBar({ routes, animateLogo }) {
  const [state, setState] = useState({ menuOpen: false });
  const [logoAnimated, setLogoAnimated] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 40 && !logoAnimated) {
      setLogoAnimated(true);
    } else if (window.scrollY < 40 && logoAnimated) {
      setLogoAnimated(false);
    }
  };
  if (animateLogo) {
    window.addEventListener('scroll', handleScroll);
  }

  const toggleMenu = open => () => {
    setState({
      menuOpen: open,
    });
  };

  const data = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
  );

  const renderRouteButtons = () => routes.map(route => (
    <Button
      key={route.title}
      onClick={() => {
        toggleMenu(false)();
        navigate(route.path);
      }}
      color="inherit"
    >
      {route.title}
    </Button>
  ));

  const renderRouteMenuItems = () => routes.map((route, index) => (
    <MenuItem
      key={route.title}
      tabIndex={index}
      onClick={() => {
        toggleMenu(false)();
        navigate(route.path);
      }}
    >
      {route.title}
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <CssBaseline />
      <StyledAppBar>
        <Toolbar>
          <AppNameContainer>
            {/* <Typography variant="h5">
              <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
            </Typography> */}
            <StyledLink to="/"><LogoImg animate={animateLogo && !logoAnimated} src={logo} alt="sk solar logo" height="100px" /></StyledLink>
          </AppNameContainer>
          <AppBarMenuButtonContainer>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={toggleMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </AppBarMenuButtonContainer>
          <AppBarButtonContainer>
            <Hidden smDown>
              {renderRouteButtons()}
            </Hidden>
          </AppBarButtonContainer>
        </Toolbar>
      </StyledAppBar>
      <SwipeableDrawer
        open={state.menuOpen}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
      >
        {renderRouteMenuItems()}
      </SwipeableDrawer>
      <Toolbar />
    </React.Fragment>
  );
}
