/*
 A Pure function to render a field used by redux forms.

 This use React-gel components, does not have any redux components.
*/
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import { Well, Label } from 'react-bootstrap';
import styled from 'styled-components';
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

const TextField = styled.text`
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  font-weight: bold;
`;

const IconEditField = styled(MdEdit)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const WellField = styled(Well)`
  position: relative;
`;

const FieldInputContainer = styled.div`
  ${media.forTabletPortraitAndUp`
    flex-basis: 0;
    flex-grow: 1;
  `};
`;

const FieldLabel = styled(Label)`
  text-transform: uppercase;
  &:after {
    padding-left: 10px;
    content: ':';
  }
  ${media.forTabletPortraitAndUp`
    text-align: right;
    margin-right: 1rem;
    flex-basis: 0;
    flex-grow: 1;
  `};
`;

const ReviewFieldComponent = ({ content, label, history }) => {
  const contentArray = Object.entries(content).map(([key, value]) => {
    return { key, value };
  });

  return (
    <React.Fragment>
      <WellField>
        <IconEditField
          size="small"
          onClick={() => {
            history.push(`/pl/${label}`);
          }}
          title="edit"
        />
        <TextField
          responsiveMarginTop={{ xs: 3, sm: 2, md: 2, lg: 3 }}
          responsiveMarginBottom={{ xs: 3, sm: 2, md: 2, lg: 3 }}
        >
          {label.toString()}
        </TextField>
        {contentArray.map(dataItem => (
          <FieldContainer>
            <FieldLabel
              responsiveMarginTop={{ xs: 3, sm: 2, md: 2, lg: 3 }}
              responsiveMarginBottom={{ xs: 3, sm: 2, md: 2, lg: 3 }}
            >
              {dataItem.key.toString()}
            </FieldLabel>
            <FieldInputContainer
              responsiveMarginTop={{ xs: 3, sm: 2, md: 2, lg: 3 }}
              responsiveMarginBottom={{ xs: 3, sm: 2, md: 2, lg: 3 }}
            >
              {dataItem.value.toString()}
            </FieldInputContainer>
          </FieldContainer>
        ))}
      </WellField>
    </React.Fragment>
  );
};

ReviewFieldComponent.propTypes = {
  content: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(ReviewFieldComponent);
