import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import InputGroupComponent from '../FormComponents/InputGroupComponent';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const CustomerFinances = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="assets.assetsProperties"
        type="text"
        label="Total Market value of all properties"
        component={InputGroupComponent}
        validate={[required]}
      />
      <Field
        name="assets.otherAssets"
        type="text"
        label="Other assets(if any)"
        component={InputGroupComponent}
        validate={[required]}
      />
      <Field
        name="assets.totalBalanceInSavings"
        type="text"
        label="Total balances in savings / investment accounts (if any)"
        component={InputGroupComponent}
        validate={[required]}
      />
      <Field
        name="goToAssets"
        nextLabel="Next: Liabilities"
        previousLabel="prev: Income"
        previousAction={previousPage}
        component={NavigationButtons}
      />
    </Form>
  );
};

CustomerFinances.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(CustomerFinances);
