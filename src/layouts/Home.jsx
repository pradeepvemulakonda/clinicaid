import React from 'react';
import { withRouter } from 'react-router';
import { Container, Backdrop } from './common';
import ApplicationContainer from '../containers/ApplicationContainer/ApplicationContainer';

export const Home = () =>
  <Container column flex="1 0 auto" name="HomeContainer">
    <Backdrop align="center" justify="flex-start" column name="Backdrop">
      <ApplicationContainer />
    </Backdrop>
  </Container>;

export default withRouter(Home);
