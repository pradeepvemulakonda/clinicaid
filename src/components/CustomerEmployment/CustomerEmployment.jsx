import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { required, number } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import SelectComponent from '../FormComponents/SelectComponent';
import InputComponent from '../FormComponents/InputComponent';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const employmentSituation = [
  {
    key: 'Full time',
    value: '1'
  },
  {
    key: 'Part time',
    value: '2'
  },
  {
    key: 'Casual',
    value: '3'
  },
  {
    key: 'Centerlink',
    value: '4'
  }
];

const SelectField = SelectComponent(employmentSituation);

const InputField = InputComponent(determineValidation);

const CustomerEmployment = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="employment.employmentStatus"
        type="select"
        label="What is your employment status"
        component={SelectField}
        validate={[required]}
      />
      <Field
        name="employment.employmentYears"
        type="text"
        label="No of years in current employment"
        component={InputField}
        validate={[required, number]}
      />
      <Field
        name="goToAssets"
        nextLabel="Next: review"
        previousLabel="prev: Assets"
        previousAction={previousPage}
        component={NavigationButtons}
      />
    </Form>
  );
};

CustomerEmployment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(CustomerEmployment);
