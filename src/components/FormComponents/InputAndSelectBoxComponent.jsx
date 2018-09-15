import React from 'react';
import FieldRenderer from './FieldRenderer';
import AmountFrequency from './AmountFrequencyComponent';
import { OptionsComponent } from './OptionsComponent';

const InputAndSelectBoxComponent = (validate, options) =>
  FieldRenderer(props =>
    <AmountFrequency {...props.input} validate={validate}>
      {OptionsComponent(options)}
    </AmountFrequency>
  );

export default InputAndSelectBoxComponent;
