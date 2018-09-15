import React from 'react';
import TextField from '@material-ui/core/TextField';
import FieldRenderer from './FieldRenderer';

const InputComponent = validate =>
  FieldRenderer(props => (
    <TextField
      error={props.meta.touched && props.meta.error}
      {...props.input}
      {...props}
      placeholder={props.label}
      alertType={validate(props.meta.touched, props.meta.error)}
      type={props.type}
    />
  ));

export default InputComponent;
