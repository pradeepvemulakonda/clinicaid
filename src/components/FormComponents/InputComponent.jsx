import React from 'react';
import { Input } from 'react-bootstrap';
import FieldRenderer from './FieldRenderer';

const InputComponent = validate =>
  FieldRenderer(props =>
    <Input
      {...props.input}
      placeholder={props.label}
      alertType={validate(props.meta.touched, props.meta.error)}
      type={props.type}
    />
  );

export default InputComponent;
