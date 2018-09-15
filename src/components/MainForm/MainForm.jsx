import React from 'react';
import { Flex } from 'grid-styled';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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

const FormContainer = styled(Flex)`
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.text`
  width: 100%;
  text-align: center;
`;

const MainForm = props => {
  const { header, customer, page } = props;
  return (
    <ApplicationWrapper name="ApplicationContainer">
      <Flex column align="flex-start" justify="flex-start" w={1}>
        <WizardFormWrapper name="WizardFormContainer">
          <FormContainer>
            <Header brand size={5} is="h4">
              <div>
                {page === 1 &&
                  customer.name &&
                  `Welcome ${customer.name.firstName}`}
              </div>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    <div>{header}</div>
                  </Typography>
                </Toolbar>
              </AppBar>
            </Header>
            <WizardComponent {...props} />
          </FormContainer>
        </WizardFormWrapper>
      </Flex>
    </ApplicationWrapper>
  );
};

MainForm.propTypes = {
  header: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  customer: PropTypes.instanceOf(Object),
};

MainForm.defaultProps = {
  customer: {},
};

export default MainForm;
