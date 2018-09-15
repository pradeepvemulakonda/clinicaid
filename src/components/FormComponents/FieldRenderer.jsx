/*
 A Pure function to render a field used by redux forms.

 This use React-gel components, does not have any redux components.
*/
import React from 'react';
import styled from 'styled-components';
import { MdWarning } from 'react-icons/md';
import { Label } from 'react-bootstrap';
import { media } from '../../helpers/styled-utils';

const FieldContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  ${media.forTabletPortraitAndUp`
    display: flex;
    flex: 0 1 auto;
    margin-left: 10%;
    margin-right: 30%;
  `};
`;

const FieldInputContainer = styled.div`
  ${media.forTabletPortraitAndUp`
    flex-basis: 0;
    flex-grow: 1;
  `};
`;

const FieldLabel = styled(Label)`
  ${media.forTabletPortraitAndUp`
    text-align: right;
    margin-right: 1rem;
    flex-basis: 0;
    flex-grow: 1;
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
      <FieldContainer>
        <FieldInputContainer
          responsiveMarginTop={{ xs: 3, sm: 2, md: 2, lg: 3 }}
          responsiveMarginBottom={{ xs: 3, sm: 2, md: 2, lg: 3 }}
        >
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
