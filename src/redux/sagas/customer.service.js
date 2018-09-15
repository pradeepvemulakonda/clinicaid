import { call, put, takeEvery } from 'redux-saga/effects';
import { customerActions } from '../modules/customer.module';
import { getCustomer } from '../../services/api';

function* getCustomerById(action) {
  const { payload } = action;
  try {
    const response = yield call(getCustomer, payload);
    // handle page data by dispatching an action
    yield put(customerActions.app.form.customer.receive(response.data));
  } catch (err) {
    // handle error by dispatching `err` via an action
    yield put(customerActions.app.form.customer.error(err));
  }
}

export function* watchCustomerRequest() {
  yield takeEvery(
    customerActions.app.form.customer.getCustomer().type,
    getCustomerById
  );
}
