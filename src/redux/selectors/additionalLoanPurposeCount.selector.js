import { createSelector } from 'reselect';

export const getAdditionalLoanPurpose = state =>
  state.app.additionalLoanPurposes;

// reselect function
export const getAdditionalLoanPurposeCount = createSelector(
  [getAdditionalLoanPurpose],
  additionalLoanPurposes => additionalLoanPurposes
);
