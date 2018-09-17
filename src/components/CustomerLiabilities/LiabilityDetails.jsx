import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import InputGroupComponent from '../FormComponents/InputGroupComponent';
import InputAndSelectBoxComponent from '../FormComponents/InputAndSelectBoxComponent';

import { required, number, minLength } from '../../helpers/validationHelpers';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const frequencyOptions = [
  {
    label: 'Monthly',
    value: '1',
  },
  {
    label: 'Weekly',
    value: '2',
  },
  {
    label: 'Fortnightly',
    value: '3',
  },
  {
    label: 'Annually',
    value: '4',
  },
];

const InputAndSelectBox = InputAndSelectBoxComponent(
  determineValidation,
  frequencyOptions
);

const LiabilityDetails = ({ labelLiability, labelOwing, ...rest }) => (
  <Well>
    <Field
      name={`liabilities.${labelLiability}`}
      type="text"
      {...rest}
      label={labelLiability}
      component={InputAndSelectBox}
      validate={[required]}
    />
    <Field
      name={`liabilities.${labelOwing}`}
      type="text"
      {...rest}
      label={labelOwing}
      component={InputGroupComponent}
      validate={[required, minLength(2), number]}
    />
  </Well>
);

LiabilityDetails.propTypes = {
  labelLiability: PropTypes.string.isRequired,
  labelOwing: PropTypes.string.isRequired,
};

export default LiabilityDetails;
