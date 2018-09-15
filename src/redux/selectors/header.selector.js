import { createSelector } from 'reselect';
import { headerTextMap } from '../../components/WizardComponent/WizardSequence';

export const getHeader = state => state.app.page;

// reselect function
export const getHeaderText = createSelector([getHeader], page =>
  headerTextMap.get(page)
);
