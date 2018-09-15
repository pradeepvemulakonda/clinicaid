import React from 'react';
import { Flex } from 'grid-styled';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import { media } from '../../helpers/styled-utils';
import WizardComponent from '../WizardComponent/WizardComponent';

const ApplicationWrapper = styled(Flex)`
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const WizardFormWrapper = styled(Flex)`
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;

  ${media.forTabletPortraitAndUp`
    padding: 2rem;
  `};
`;

const HeaderText = styled(Typography)`
  flex-grow: 1;
`;

const FormContainer = styled(Flex)`
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const MainForm = props => {
  const { header } = props;
  return (
    <ApplicationWrapper name="ApplicationContainer">
      <Flex column align="flex-start" justify="flex-start" w={1}>
        <WizardFormWrapper name="WizardFormContainer">
          <FormContainer>
            <HeaderText variant="title" color="inherit">
              <div>{header}</div>
            </HeaderText>
            <Button color="inherit">Login</Button>
            <WizardComponent {...props} />
          </FormContainer>
        </WizardFormWrapper>
      </Flex>
    </ApplicationWrapper>
  );
};

MainForm.propTypes = {
  header: PropTypes.string,
};

MainForm.defaultProps = {
  header: '',
};

export default MainForm;
