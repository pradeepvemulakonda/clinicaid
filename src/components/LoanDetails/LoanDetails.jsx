import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { required, number, minLength } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';
import AdditionalLoanPurpose, {
  SelectField,
  InputGroupField
} from './AdditionalLoanPurpose';

const LoanDetails = props => {
  const { handleSubmit, previousPage } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="loan.loanPurpose"
        type="select"
        label="Primary Loan Purpose"
        component={SelectField}
        validate={[required]}
      />
      <Field
        name="loan.amount"
        type="text"
        label="Amount"
        component={InputGroupField}
        validate={[required, number, minLength(4)]}
      />
      <FieldArray name="members" component={AdditionalLoanPurpose} />
      <Field
        name="goToIncome"
        nextLabel="Next: Income"
        previousLabel="prev: Basics"
        previousAction={previousPage}
        component={NavigationButtons}
      />
    </Form>
  );
};

LoanDetails.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(LoanDetails);
