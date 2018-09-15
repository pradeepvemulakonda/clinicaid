import React from 'react';
import TextField from '@material-ui/core/TextField';
import FieldRenderer from './FieldRenderer';

const InputComponent = () =>
  FieldRenderer(props => (
    <TextField
      {...props.input}
      {...props}
      placeholder={props.label}
      error={props.meta.invalid && props.meta.touched}
      type={props.type}
    />
  ));

export default InputComponent;
