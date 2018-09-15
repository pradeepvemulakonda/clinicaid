import React from 'react';
import { withRouter } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Backdrop } from './common';
import ToolBar from './ToolBar';
import ApplicationContainer from '../containers/ApplicationContainer/ApplicationContainer';

export const Home = () => (
  <React.Fragment>
    <CssBaseline />
    <ToolBar />
    <Container name="HomeContainer">
      <Backdrop align="center" justify="flex-start" column name="Backdrop">
        <ApplicationContainer />
      </Backdrop>
    </Container>
  </React.Fragment>
);

export default withRouter(Home);
