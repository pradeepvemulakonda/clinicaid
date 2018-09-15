import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { required } from '../../helpers/validationHelpers';
import { Form } from '../../layouts/common';
import BooleanRadioComponent from '../FormComponents/BooleanRadioComponent';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';
import LiabilityDetails from './LiabilityDetails';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const RadioField = BooleanRadioComponent(determineValidation);

const CustomerLiabilities = props => {
  const {
    handleSubmit,
    previousPage,
    hasHomeLoan,
    hasPersonalLoan,
    hasCreditCards
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="liabilities.homeLoanRadio"
        type="select"
        label="Home Loans"
        component={RadioField}
        validate={[required]}
      />
      {hasHomeLoan === 'yes' &&
        <LiabilityDetails
          labelLiability="Total repayments for all home loans"
          labelOwing="Total owing for all home loans"
        />}
      <Field
        name="liabilities.creditCardRadio"
        type="text"
        label="Credit Cards"
        component={RadioField}
        validate={[required]}
      />
      {hasCreditCards === 'yes' &&
        <LiabilityDetails
          labelLiability="Total owing for all credit cards"
          labelOwing="Total credit limit for all credit cards"
        />}
      <Field
        name="liabilities.personalLoanRadio"
        type="text"
        label="Personal Loans"
        component={RadioField}
        validate={[required]}
      />
      {hasPersonalLoan === 'yes' &&
        <LiabilityDetails
          labelLiability="Total repayments for all other loans"
          labelOwing="Total owing of all other loans"
        />}
      <Field
        name="goToAssets"
        nextLabel="Next: Employment"
        previousLabel="prev: Assets"
        previousAction={previousPage}
        component={NavigationButtons}
      />
    </Form>
  );
};

CustomerLiabilities.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  hasHomeLoan: PropTypes.string.isRequired,
  hasCreditCards: PropTypes.string.isRequired,
  hasPersonalLoan: PropTypes.string.isRequired
};

const LocalForm = reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(CustomerLiabilities);

const selector = formValueSelector('personalLoan');

export default connect(state => {
  const hasHomeLoan = selector(state, 'liabilities.homeLoanRadio');
  const hasCreditCards = selector(state, 'liabilities.creditCardRadio');
  const hasPersonalLoan = selector(state, 'liabilities.personalLoanRadio');
  return {
    hasHomeLoan,
    hasCreditCards,
    hasPersonalLoan
  };
})(LocalForm);
