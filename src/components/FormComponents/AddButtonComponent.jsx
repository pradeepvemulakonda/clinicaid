import styled from 'styled-components';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonRenderer from './ButtonRenderer';
import { media } from '../../helpers/styled-utils';

const ButtonField = styled(Button)`
  width: 100%;
  ${media.forTabletPortraitAndUp`
    width: auto;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
    margin-left: 30%;
  `};
`;

const AddButtonComponent = validate =>
  ButtonRenderer(({ label, type, touched, error, onClick, disabled }) => (
    <ButtonField
      soft
      styling="hero"
      type={type}
      label={label}
      disabled={disabled}
      onClick={onClick}
      iconPosition="left"
      iconProps={{ size: 'medium' }}
      error={validate(touched, error)}
    />
  ));

export default AddButtonComponent;
