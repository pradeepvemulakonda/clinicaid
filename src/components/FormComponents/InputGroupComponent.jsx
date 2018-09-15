import React from 'react';
import { InputGroup } from 'react-bootstrap';
import FieldRenderer from './FieldRenderer';

const InputGroupComponent = validate =>
  FieldRenderer(props => (
    <InputGroup
      {...props.input}
      prefix="$"
      type={props.type}
      placeholder={props.label}
      alertType={validate(props.meta.touched, props.meta.error)}
      block
    />
  ));

export default InputGroupComponent;
