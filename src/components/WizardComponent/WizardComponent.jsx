import React from 'react';
import PropTypes from 'prop-types';
import wizardSequence from './WizardSequence';

const WizardComponent = ({ page, history, ...rest }) => {
  const navigateTo = next => history.push(next);

  const wizardObject = wizardSequence.getComponentFromIndex(page);
  const ReactComponent = wizardObject.component;

  return (
    <ReactComponent
      {...rest}
      onSubmit={() => navigateTo(wizardObject.next)}
      previousPage={() => navigateTo(wizardObject.prev)}
    />
  );
};

WizardComponent.propTypes = {
  page: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

export default WizardComponent;
