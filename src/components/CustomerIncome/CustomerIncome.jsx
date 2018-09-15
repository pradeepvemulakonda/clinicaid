import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import SelectComponent from '../FormComponents/SelectComponent';
import InputAndSelectBoxComponent from '../FormComponents/InputAndSelectBoxComponent';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const housingSituationOptions = [
  {
    key: 'select',
    value: '1'
  },
  {
    key: 'Renting',
    value: '2'
  },
  {
    key: 'Owns Outright(No Mortgage)',
    value: '3'
  },
  {
    key: 'Boarding/Living with Parents',
    value: '4'
  }
];

const frequencyOptions = [
  {
    key: 'Monthly',
    value: '1'
  },
  {
    key: 'Weekly',
    value: '2'
  },
  {
    key: 'Fortnightly',
    value: '3'
  },
  {
    key: 'Annually',
    value: '4'
  }
];

const SelectField = SelectComponent(housingSituationOptions);

const InputAndSelectBox = InputAndSelectBoxComponent(
  determineValidation,
  frequencyOptions
);

const CustomerIncome = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="income.housingSituation"
        type="select"
        label="What's your current housing situation?"
        component={SelectField}
        validate={[required]}
      />
      <Field
        name="income.salaryWagesPension"
        type="text"
        label="Salary (after tax)"
        component={InputAndSelectBox}
        validate={[required]}
      />
      <Field
        name="goToAssets"
        nextLabel="Next: Assets"
        previousLabel="prev: Loan Details"
        previousAction={previousPage}
        component={NavigationButtons}
      />
    </Form>
  );
};

CustomerIncome.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(CustomerIncome);
