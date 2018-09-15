/*
 A Pure function to render a field used by redux forms.

 This use React-gel components, does not have any redux components.
*/
import React from 'react';
import styled from 'styled-components';
import { MdWarning } from 'react-icons/md';
import { media } from '../../helpers/styled-utils';

const FieldContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: center;
  ${media.forTabletPortraitAndUp`
    display: flex;
    flex: 1 0 auto;
    max-width: 30rem;
    margin: auto;
  `};
`;

const FieldInputContainer = styled.div`
  & > * {
    width: 100%;
  }
  ${media.forTabletPortraitAndUp`
    flex: 1 0 auto;
  `};
`;

const FieldError = styled.div`
  ${media.forTabletPortraitAndUp`  
    flex: 0 1 auto;
    margin-right: 20px;
  `};
`;

const ErrorIcon = styled(MdWarning)`
  color: red;
  margin-bottom: 3px;
`;

const ErrorText = styled.text`
  display: inline;
  margin-left: 6px;
`;

const FieldFragment = render => props => {
  const { input, label, meta } = props;
  return (
    <React.Fragment>
      <FieldContainer name="FieldContainer">
        <FieldInputContainer name="FieldInputContainer">
          {render(props)}
          <FieldError>
            {meta.touched &&
              (meta.error && (
                <div>
                  <ErrorIcon size="20px" />
                  <ErrorText>{meta.error}</ErrorText>
                </div>
              ))}
          </FieldError>
        </FieldInputContainer>
      </FieldContainer>
    </React.Fragment>
  );
};

export default FieldFragment;
