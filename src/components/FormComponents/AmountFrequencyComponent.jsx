import { Flex } from 'grid-styled';
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';

const InputAddon = styled(Flex)``;

const InputField = styled(Input)`
  border-radius: 3px 0px 0px 3px;
`;

const SelectWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.hero};
  color: rgb(255, 255, 255);
  border-width: initial;
  border-style: none;
  border-radius: 0px 3px 3px 0px;
  display: flex;
`;

const SelectField = styled(Select)`
  background-color: ${({ theme }) => theme.color.hero};
  color: rgb(255, 255, 255);
  border-width: initial;
  border-style: none;
  border-radius: 0px 3px 3px 0px;

  &:after {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid white;
    position: absolute;
    top: 45%;
    right: 10px;
    content: '';
    z-index: 98;
  }
`;

const AmountFrequency = ({
  input,
  label,
  validate,
  type,
  children,
  touched,
  error,
  ...rest
}) => (
  <InputAddon>
    <InputField
      {...rest}
      placeholder={label}
      alertType={validate(touched, error)}
      type={type}
    />
    <SelectWrapper>
      <SelectField>{children}</SelectField>
    </SelectWrapper>
  </InputAddon>
);

AmountFrequency.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default AmountFrequency;
