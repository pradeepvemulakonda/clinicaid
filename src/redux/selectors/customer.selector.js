import { createSelector } from 'reselect';

export const getCust = state => state.customer;

// reselect function
export const getCustomer = createSelector([getCust], customer => customer);
