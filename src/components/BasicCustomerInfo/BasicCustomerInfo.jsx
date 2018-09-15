import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';
import InputComponent from '../FormComponents/InputComponent';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const InputField = InputComponent(determineValidation);

const BasicCustomerInfo = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="basic.firstName"
        type="text"
        label="First Name"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="basic.email"
        type="text"
        label="Email"
        component={InputField}
        validate={[required, email]}
      />

      <Field
        name="goToLoanDetails"
        nextLabel="Next: Finances"
        previousLabel="prev: Basics"
        displayPrev={false}
        component={NavigationButtons}
      />
    </Form>
  );
};

BasicCustomerInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(BasicCustomerInfo);
