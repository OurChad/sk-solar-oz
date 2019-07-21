import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

    @media (min-width: 500px) {
        min-width: 50%;
    }
`;

const AppBarButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export default function AppBar({ routes }) {
  const [state, setState] = useState({ menuOpen: false });

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
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <AppNameContainer>
            <Typography variant="h6">
              <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
            </Typography>
          </AppNameContainer>
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