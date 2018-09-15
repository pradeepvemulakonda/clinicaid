import { handleActions, createActions } from 'redux-actions';
import wizardSequence from '../../components/WizardComponent/WizardSequence';

export const appActions = createActions({
  app: {
    page: {
      NEXT: null, // uses identity function for payload
      PREVIOUS: null,
      FETCH: null
    },
    form: {
      pl: {
        loan: {
          ADD_LOAN_PURPOSE: null
        }
      }
    }
  }
});

export const appReducers = handleActions(
  {
    [appActions.app.page.fetch().type]: (state, action) => ({
      ...state,
      page: wizardSequence.indexFromPath(action.payload)
    })
  },
  {
    page: 0,
    additionalLoanPurposes: 0
  }
);
