/*
 A Pure function to render a field used by redux forms.

 This use React-gel components, does not have any redux components.
*/
import { Flex } from 'grid-styled';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { media } from '../../helpers/styled-utils';

const FieldContainer = styled(Flex)`
  margin-left: 1rem;
  margin-right: 1rem;
  flex-direction: column-reverse;

  ${media.forTabletPortraitAndUp`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
  `};
`;

const NavigationButton = styled(Button)`
  justify-content: center;
  margin-top: 0.7rem;
`;

const NavigationButtons = ({
  input,
  nextLabel,
  previousLabel,
  previousAction,
  displayNext,
  displayPrev,
  ...rest
}) => (
  <React.Fragment>
    <FieldContainer name="FieldContainer" {...rest}>
      <div>
        {displayPrev && (
          <NavigationButton
            block
            soft
            variant="contained"
            color="primary"
            inputType="submit"
            onClick={previousAction}
          >
            {previousLabel}
          </NavigationButton>
        )}
      </div>
      <div>
        {displayNext && (
          <NavigationButton
            block
            variant="contained"
            color="primary"
            inputType="submit"
          >
            {nextLabel}
          </NavigationButton>
        )}
      </div>
    </FieldContainer>
  </React.Fragment>
);

NavigationButtons.defaultProps = {
  displayNext: true,
  displayPrev: true,
  previousAction: undefined,
  nextLabel: 'next',
  previousLabel: 'previous',
};

NavigationButtons.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
  previousAction: PropTypes.func,
  displayNext: PropTypes.bool,
  displayPrev: PropTypes.bool,
};

export default NavigationButtons;
