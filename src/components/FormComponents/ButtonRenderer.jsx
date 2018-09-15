/*
 A Pure function to render a field used by redux forms.

 This use React-gel components, does not have any redux components.
*/
import React from 'react';
import { Flex } from 'grid-styled';
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

const FieldInputContainer = styled.div`
  ${media.forTabletPortraitAndUp`
    justify-content: flex-end;
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    margin: auto;
  `}
`;

const FieldFragment = render => props =>
  <React.Fragment>
    <FieldContainer>
      <FieldInputContainer name="FieldInputContainer">
        {render(props)}
      </FieldInputContainer>
    </FieldContainer>
  </React.Fragment>;

const FieldRenderer = render => FieldFragment(render);

export default FieldRenderer;
