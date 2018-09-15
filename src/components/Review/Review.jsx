import React from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '../../layouts/common';
import ReviewFieldComponent from '../FormComponents/ReviewFieldComponent';
import NavigationButtons from '../FormComponents/NavigationButtonsComponent';

const Review = props => {
  const { handleSubmit, previousPage, formData, history } = props;
  const fieldData = [];
  if (formData) {
    fieldData.push(
      Object.entries(formData).map(value =>
        <Field
          history={history}
          name={value[0]}
          type="text"
          label={value[0]}
          content={value[1]}
          component={ReviewFieldComponent}
        />
      )
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      {fieldData}
      <Field
        name="goToAssets"
        previousLabel="prev: Employment"
        previousAction={previousPage}
        displayNext={false}
        component={NavigationButtons}
      />
    </Form>
  );
};

Review.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  formData: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

const ReviewComponent = reduxForm({
  form: 'personalLoan',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(Review);

const mapStateToProps = state => ({
  isFetching: 'yes',
  formData: getFormValues('personalLoan')(state)
});

export default connect(mapStateToProps)(ReviewComponent);
