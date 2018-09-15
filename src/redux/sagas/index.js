import { all } from 'redux-saga/effects';

// Import your application sagas here then reference them in the root saga below.
import { watchCustomerRequest } from './customer.service';

export default function* rootSaga() {
  yield all([watchCustomerRequest()]);
}
