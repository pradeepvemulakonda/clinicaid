import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { Button } from '@material-ui/core/Button';
import { Container, Backdrop } from './common';

export const ErrorContainer = styled(Flex)`
  border: 1px red solid;
  border-radius: 3px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

const Error = () => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" p={40} column>
      <ErrorContainer>
        <h1>404 - Page Not Found</h1>
        <Button to="/" label="Home" />
      </ErrorContainer>
    </Backdrop>
  </Container>
);

export default Error;
