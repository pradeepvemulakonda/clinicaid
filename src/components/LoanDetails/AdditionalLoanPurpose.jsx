import React from 'react';
import { Field } from 'redux-form';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import styled from 'styled-components';
import { required, number, minLength } from '../../helpers/validationHelpers';

import AddButtonComponent from '../FormComponents/AddButtonComponent';
import SelectComponent from '../FormComponents/SelectComponent';
import InputGroupComponent from '../FormComponents/InputGroupComponent';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const AddButtonField = AddButtonComponent(determineValidation);

export const InputGroupField = InputGroupComponent(determineValidation);

const loanPurposeOptions = [
  {
    key: 'New Car',
    value: 'value1'
  },
  {
    key: 'Used Car',
    value: 'value2'
  },
  {
    key: 'Motorbike',
    value: 'value2'
  }
];

export const SelectField = SelectComponent(loanPurposeOptions);

const List = styled.div`
  list-style: none;
`;

const AdditionalLoanPurpose = ({ fields, meta: { error, submitFailed } }) =>
  <div>
    {fields.map((loanPurpose, index) =>
      <List key={index}>
        <Well>
          <MdClose
            onClick={() => fields.remove(index)}
            title="Remove loan purpose"
          />
          <Field
            name={`loan.${loanPurpose}.code`}
            type="select"
            label="Additional Loan Purpose"
            component={SelectField}
            validate={[required]}
          />
          <Field
            name={`loan.${loanPurpose}.amount`}
            type="text"
            label="Amount"
            component={InputGroupField}
            validate={[required, number, minLength(4)]}
          />
        </Well>
      </List>
    )}
    <List>
      <Field
        name="loan.addAnotherPurpose"
        component={AddButtonField}
        label="Add another Loan purpose"
        onClick={() => fields.push({})}
        type="button"
        disabled={fields.length > 3}
      />
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </List>
  </div>;

AdditionalLoanPurpose.propTypes = {
  fields: PropTypes.instanceOf(Array).isRequired,
  meta: PropTypes.instanceOf(Object).isRequired
};

export default AdditionalLoanPurpose;
