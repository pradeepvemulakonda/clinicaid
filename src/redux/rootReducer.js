import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { appReducers } from './modules/app.module';
import { customerReducer } from './modules/customer.module';

// Import your application reducers here and register them in
// the combineReducers map below
// @see http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html

const rootReducer = combineReducers({
  customer: customerReducer,
  app: appReducers,
  form: reduxFormReducer // mounted under "form"
});

export default rootReducer;
