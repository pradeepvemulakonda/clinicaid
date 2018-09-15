import { createSelector } from 'reselect';

export const getPage = state => state.app.page;

// reselect function
export const getPageState = createSelector([getPage], page => page);
