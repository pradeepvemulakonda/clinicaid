import { handleActions, createActions } from 'redux-actions';

export const customerActions = createActions({
  app: {
    form: {
      customer: {
        getCustomer: null,
        receive: null,
        error: null
      }
    }
  }
});

export const customerReducer = handleActions(
  {
    [customerActions.app.form.customer.receive().type]: (state, action) => ({
      ...state,
      ...action.payload.data
    })
  },
  {}
);
