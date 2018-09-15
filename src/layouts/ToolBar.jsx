import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderText = styled(Typography)`
  flex-grow: 1;
`;

const ToolBar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <HeaderText variant="title" color="inherit">
        <div>Welcome to clincaid</div>
      </HeaderText>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default ToolBar;
