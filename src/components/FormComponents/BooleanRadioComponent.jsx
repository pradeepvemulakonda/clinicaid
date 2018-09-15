import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import FieldRenderer from './FieldRenderer';

const BooleanRadioComponent = validate =>
  FieldRenderer(props => (
    <ButtonGroup
      name={`${props.label} radios`}
      label={props.label}
      error={validate(props.meta.touched, props.meta.error)}
      block
      styling="hero"
    >
      <Button
        label="yes"
        checked={props.input.value === 'yes'}
        onClick={e => {
          if (e.target.value === 'on') {
            props.input.onChange('yes');
          }
        }}
      />
      <Button
        label="no"
        checked={props.input.value === 'no'}
        onClick={e => {
          if (e.target.value === 'on') {
            props.input.onChange('no');
          }
        }}
      />
    </ButtonGroup>
  ));

export default BooleanRadioComponent;
